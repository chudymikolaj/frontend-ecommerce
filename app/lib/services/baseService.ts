import { axiosGetRequest } from "./axiosRequest";

const navbarRequest = async () => {
	try {
		const response = await axiosGetRequest(
			"/api/navbar?populate[0]=LogotypeName,Menu&populate[1]=UserLinks.UserLink.Icon,UserLinks.UserLinks.Icon"
		);

		return response.data;
	} catch (error) {
		throw error;
	}
};

export { navbarRequest };
