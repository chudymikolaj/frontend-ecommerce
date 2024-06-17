import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

interface RegisterResponse {
	jwt: string;
	user: any;
}

interface LoginResponse {
	jwt: string;
	user: any;
}

export const register = async (username: string, email: string, password: string): Promise<RegisterResponse> => {
	const response = await axios.post<RegisterResponse>(`${API_URL}/api/auth/local/register`, {
		username,
		email,
		password,
	});

	return response.data;
};

export const login = async (identifier: string, password: string): Promise<LoginResponse> => {
	const response = await axios.post<LoginResponse>(`${API_URL}/api/auth/local`, {
		identifier,
		password,
	});

	return response.data;
};
