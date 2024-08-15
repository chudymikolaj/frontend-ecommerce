import { axiosGetProductBySlugResponse } from "@/app/lib/services/baseService.types";

export type CarouselComponentPropsType = {
	products: {
		data: axiosGetProductBySlugResponse[];
	};
};
