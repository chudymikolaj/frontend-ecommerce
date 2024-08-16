import { ProductImageAttributesType } from "@services/baseService.types";

export type CarouselProductsGalleryPropsType = {
	productGallery: ProductImageAttributesType[];
	activeImage: string;
	hoverGetSlideImage: (slide: ProductImageAttributesType) => void;
};
