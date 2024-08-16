import type { ProductImageAttributesType } from "@services/baseService.types";

export type GalleryProductProps = {
	productGallery: { data: ProductImageAttributesType[] };
	activeImage: string;
	hoverGetSlideImage: (slide: ProductImageAttributesType) => void;
};
