export type ProductImageType = {
	data: ProductImageAttributesType;
};

export type ProductImageAttributesType = {
	id: number;
	attributes: {
		name: string;
		alternativeText: string;
		caption: string;
		width: number;
		height: number;
		formats: Object;
		hash: string;
		url: string;
		previewUrl: string;
		provider: "local";
		provider_metadata: string;
	};
};

export type axiosGetProductBySlugResponse = {
	id: number;
	attributes: {
		idProduct: string;
		name: string;
		slug: string;
		price: number;
		count: number;
		image: ProductImageType;
		productGallery: { data: ProductImageAttributesType[] };
		description: string;
	};
};
