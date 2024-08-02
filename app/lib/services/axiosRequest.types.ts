import type { axiosGetProductBySlugResponse, ProductImageType } from "./baseService.types";

export type HomepageAxiosGetOnePageRequestType = {
	data: {
		id: number;
		attributes: {
			title: string;
			slug: string;
			createdAt: string;
			updatedAt: string;
			publishedAt: string;
			locale: "en";
			ShowcaseMainPage: {
				id: number;
				Header: string;
				HeaderImage: ProductImageType;
				DescriptionWithImage: {
					id: number;
					Header: string;
					Text: string;
					ButtonName: string;
					ButtonUrl: string;
				};
			};
			Sections: [
				{
					id: number;
					__component: "sections.section-products";
					CountOfProducts: number;
					HeaderTitle: string;
					CategoryProducts: string;
				}
			];
		};
	}[];
};

export type CategoriesAxiosGetOneCategoryRequestType = {
	data: {
		id: number;
		attributes: {
			id: number;
			__component: "sections.section-products";
			CountOfProducts: number;
			HeaderTitle: string;
			CategoryProducts: string;
			products: {
				data: axiosGetProductBySlugResponse[];
			};
		};
	}[];
};
