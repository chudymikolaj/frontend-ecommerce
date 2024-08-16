"use client";

import styles from "./gallery.module.scss";
import type { GalleryProductProps } from "./gallery.types";

import CarouselProductGalleryComponent from "@components/Carousels/CarouselProductGallery";

const Gallery = ({ productGallery, hoverGetSlideImage, activeImage }: GalleryProductProps) => {
	const { data } = productGallery;

	if (data === null) return;

	return (
		<div className={styles.Gallery__container}>
			<CarouselProductGalleryComponent
				productGallery={data}
				hoverGetSlideImage={hoverGetSlideImage}
				activeImage={activeImage}
			/>
		</div>
	);
};

export default Gallery;
