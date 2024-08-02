import type {
	HomepageAxiosGetOnePageRequestType,
	CategoriesAxiosGetOneCategoryRequestType,
} from "./axiosRequest.types";
import axios, { AxiosError } from "axios";

const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

type url = string;
type slug = string;
type extraURL = string;
type data = any;

const axiosGetRequest = async (url: url) => {
	try {
		const response = await axios.get(`${API_URL}${url}`);

		return response;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			// Axios-specific error
			throw new Error("Failed to fetch data in axiosGetRequest");
		} else {
			// Some other error
			console.error("An unexpected error occurred:", error);
			throw new Error("An unexpected error occurred in axiosGetRequest");
		}
	}
};

const axiosGetOnePageRequest = async (slug: slug, extraURL: extraURL = "populate=*") => {
	try {
		const response = await axios.get<HomepageAxiosGetOnePageRequestType>(
			`${API_URL}/api/pages?filters[slug][$eq]=${slug}&${extraURL}`
		);

		return response?.data.data;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			// Axios-specific error
			throw new Error("Failed to fetch filters data in axiosGetOneRequest");
		} else {
			// Some other error
			console.error("An unexpected error occurred:", error);
			throw new Error("An unexpected error occurred in axiosGetOneRequest");
		}
	}
};

const axiosGetOneCategoryRequest = async (slug: slug, extraURL: extraURL = "?populate=*") => {
	try {
		const response = await axios.get<CategoriesAxiosGetOneCategoryRequestType>(
			`${API_URL}/api/categories?filters[CategorySlug][$eq]=${slug}&${extraURL}`
		);

		return response?.data.data;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			// Axios-specific error
			throw new Error("Failed to fetch filters data in axiosGetOneCategoryRequest");
		} else {
			// Some other error
			console.error("An unexpected error occurred:", error);
			throw new Error("An unexpected error occurred in axiosGetOneCategoryRequest");
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
			throw new Error("Failed to fetch data in axiosPostRequest");
		} else {
			// Some other error
			console.error("An unexpected error occurred:", error);
			throw new Error("An unexpected error occurred in axiosPostRequest");
		}
	}
};

export { axiosGetRequest, axiosGetOnePageRequest, axiosGetOneCategoryRequest, axiosPostRequest };
