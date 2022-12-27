/* eslint-disable class-methods-use-this */
import axios from 'axios';
import { appConfig } from '../configs/app.config';
import EventEmitter from '../utils/event-emmiter';
import tokenService from './token.service';

interface LoginDto {
	username: string;
	password: string;
}

interface ILoginResponse {
	refresh: string;
	access: string;
}

export class AuthService extends EventEmitter {
	// eslint-disable-next-line no-useless-constructor
	constructor() {
		super();
	}

	async login(tokenObtainPair: LoginDto) {
		try {
			const { data } = await axios.post<ILoginResponse>(
				`${appConfig.baseUrl}/v1/user/login/`,
				tokenObtainPair,
			);
			tokenService.setToken(data);
		} catch (error) {
			throw new Error('Error while login');
		}
	}

	async logout() {
		tokenService.clear();
		this.emit('logout');
	}
}

export default new AuthService();

