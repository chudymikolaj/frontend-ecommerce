import type { ProductImageAttributesType, ProductImageType } from "@services/baseService.types";

export type ImageProductProps = {
	attributes: {
		image: ProductImageType;
		productGallery: { data: ProductImageAttributesType[] };
	};
};

export type SlideImageProductProps = ProductImageAttributesType;
