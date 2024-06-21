import { axiosPostRequest } from "./axiosRequest";

interface RegisterResponse {
	jwt: string;
	user: any;
}

interface LoginResponse {
	jwt: string;
	user: any;
}

export const register = async (username: string, email: string, password: string): Promise<RegisterResponse> => {
	try {
		const data = {
			username,
			email,
			password,
		};
		const response = await axiosPostRequest(`/api/auth/local/register`, data);

		return response.data;
	} catch (error) {
		throw error;
	}
};

export const login = async (identifier: string, password: string): Promise<LoginResponse> => {
	try {
		const data = {
			identifier,
			password,
		};
		const response = await axiosPostRequest(`/api/auth/local`, data);

		return response.data;
	} catch (error) {
		throw error;
	}
};
