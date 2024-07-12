import { axiosGetRequest } from "./axiosRequest";
import type { axiosGetProductBySlugResponse } from "./baseService.types";

export const navbarRequest = async () => {
	try {
		const response = await axiosGetRequest(
			"/api/navbar?populate[0]=LogotypeName,Menu&populate[1]=UserLinks.UserLink.Icon,UserLinks.UserLinks.Icon"
		);

		return response.data;
	} catch (error) {
		throw error;
	}
};

export const axiosGetProductBySlug = async (slug: string): Promise<axiosGetProductBySlugResponse> => {
	try {
		const response = await axiosGetRequest(`/api/products?filters[slug][$eq]=${slug}&populate=*`);

		return response.data.data[0];
	} catch (error) {
		throw new Error(`Failed to fetch product by slug: ${slug}`);
	}
};
