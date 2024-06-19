import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

type url = string;
type data = any;

const axiosGetRequest = async (url: url) => {
	try {
		const response = await axios.get(`${API_URL}${url}`);

		return response;
	} catch (error) {
		console.error("Error during axios request:", error);

		throw error;
	}
};

const axiosPostRequest = async (url: url, data: data) => {
	try {
		const response = await axios.post(`${API_URL}${url}`, data);

		return response;
	} catch (error) {
		console.error("Error during axios request:", error);

		throw error;
	}
};

export { axiosGetRequest, axiosPostRequest };
