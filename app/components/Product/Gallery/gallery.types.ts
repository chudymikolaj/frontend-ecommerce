import type { ProductImageAttributesType } from "@services/baseService.types";

export type GalleryProductProps = {
	productGallery: { data: ProductImageAttributesType[] };
	hoverGetSlideImage: (slide: ProductImageAttributesType) => void;
};
