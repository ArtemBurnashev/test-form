import axios from "axios";
import jwt_decode from "jwt-decode";
import { appConfig } from "../configs/app.config";

type TokenType = {
  refresh: string
  access: string
}

type DecodedTokenInfo = {
	token_type: string;
	exp:        number;
	iat:        number;
	jti:        string;
	user_id:    number;
}

const stores = {
	session:sessionStorage,
	local:localStorage
}

class TokenService {
	// Set to local if keeping the session after reload is needed
	public storageType: 'local' | 'session' ;
	
	constructor(){
		this.storageType = 'local'
		console.log('constructor',this.storageType)
	}

	private setItem(key: string, value: string) {
		stores[this.storageType].setItem(key,value)
	}

	private getItem(key:string){
		return stores[this.storageType].getItem(key)
	}

	private removeItem(key:string){
		return stores[this.storageType].removeItem(key)
	}

	setToken(value: TokenType) {
		this.setItem('token',JSON.stringify(value))
	}

	getToken():TokenType|undefined {
		
		const tokenItem = this.getItem('token')

		if(!tokenItem) return undefined
		const parsedToken = JSON.parse(tokenItem) 
		return parsedToken
	}

	get isExpired(){
		const token = this.getToken()
		if(!token) throw new Error("Token isn't in the storage")
		const decodedInfo = jwt_decode<DecodedTokenInfo>(token.access)
		// eslint-disable-next-line prettier/prettier
		if(!decodedInfo?.exp) throw new Error('Property "exp" does not exist in jwt token')
		const expirationDateTime = decodedInfo.exp * 1000
		return expirationDateTime < Date.now()
	}

	// eslint-disable-next-line consistent-return
	async refresh() {
		const token = this.getToken()
		if(!token) throw new Error("Token isn't in the storage")
		try {

			const {data} = await axios.post<TokenType>(`${/* appConfig.baseUrl */}/v1/user/refresh/token/`,{
				refresh: token.refresh
			},{
				headers:{
					Authorization: `Bearer ${token.access}`,
				}
			})
			this.setToken(data)

			return data
		} catch (error) {
			TokenService.handleRefreshError(error)
		}
	}

	static handleRefreshError(error:unknown){
		if(axios.isAxiosError(error)){
			if(error.response?.status === 401){
				console.log('here')
				throw new Error('The refresh token is invalid')
			}
			throw new Error('There was an error while retrieving the token')
			
		}	
	}

	clear(){
		this.removeItem('token')
	}
}

export default new TokenService();
