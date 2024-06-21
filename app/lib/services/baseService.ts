import { axiosGetRequest } from "./axiosRequest";

const navbarRequest = async () => {
	try {
		const response = await axiosGetRequest("/api/navbar?populate[0]=LogotypeName,Menu&populate[1]=MenuButtons.Icon");

		return response.data;
	} catch (error) {
		throw error;
	}
};

export { navbarRequest };
