import axios, { AxiosError } from "axios";

const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

type url = string;
type data = any;

const axiosGetRequest = async (url: url) => {
	try {
		const response = await axios.get(`${API_URL}${url}`);

		return response;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			// Axios-specific error
			throw new Error("Failed to fetch data");
		} else {
			// Some other error
			console.error("An unexpected error occurred:", error);
			throw new Error("An unexpected error occurred");
		}
	}
};

const axiosPostRequest = async (url: url, data: data) => {
	try {
		const response = await axios.post(`${API_URL}${url}`, data);

		return response;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			// Axios-specific error
			throw new Error("Failed to fetch data");
		} else {
			// Some other error
			console.error("An unexpected error occurred:", error);
			throw new Error("An unexpected error occurred");
		}
	}
};

export { axiosGetRequest, axiosPostRequest };
