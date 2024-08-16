import { axiosGetProductBySlugResponse } from "@services/baseService.types";

export type CarouselProductsPropsType = {
	products: {
		data: axiosGetProductBySlugResponse[];
	};
};
