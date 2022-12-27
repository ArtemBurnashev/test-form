import axios, {  AxiosInstance, AxiosRequestConfig } from 'axios';
import { appConfig } from '../configs/app.config';
import EventEmitter from '../utils/event-emmiter';

import authService from './auth.service';
import tokenService from './token.service';

class RequestService extends EventEmitter {

	public axios:AxiosInstance

	   constructor(baseURL:string){

		super()

		this.axios = axios.create({
			baseURL,
			headers:{
				'Content-Type': 'application/json',
			}
		})

		this.setInterceptors()
	}

	async handleRefreshToken(config:AxiosRequestConfig){
		try {
			const token = await tokenService.refresh()
			//@ts-ignore
			// eslint-disable-next-line prettier/prettier
			    config.headers.Authorization = `Bearer ${token?.access}`
	
		} catch (error) {
			authService.logout()
		}
	
	}

	setInterceptors(){

		this.axios.interceptors.request.use(
			async (config) => {

				
				    const token = tokenService.getToken()

			
		
				// @ts-ignore
				     config.headers.Authorization = token ? `Bearer ${token?.access}` : undefined
		
				
				if (tokenService.isExpired) {
					await this.handleRefreshToken(config)
				}
				return config;
			},
			(error) => Promise.reject(error)
		);

		this.axios.interceptors.response.use(
			(value) => value,
			async (error) => {
				if (axios.isAxiosError(error)) {
					// if (error.response?.status === 401) {
						
					// }
				}
				return Promise.reject(error);
			}
		);
		
		this.axios.interceptors.response.use(
			(response) => response,
			(error) => Promise.reject(error?.response?.data)
		);
	}
}

export default new RequestService(appConfig.baseUrl)