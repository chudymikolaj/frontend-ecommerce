"use client";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./gallery.module.scss";
import type { ProductImageAttributesType } from "@components/Product/products.types";
import type { GalleryProductProps } from "./gallery.types";

const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

const Gallery = ({ productGallery, hoverGetSlideImage }: GalleryProductProps) => {
	const getGallerySlider = productGallery.data;
	const slideCount = getGallerySlider?.length;
	const isSlideDisabled = slideCount <= 4;

	const settings = {
		speed: 500,
		accessibility: true,
		slidesToShow: 4,
		initialSlide: 0,
		slidesToScroll: isSlideDisabled ? 0 : 1,
		infinite: !isSlideDisabled,
		draggable: !isSlideDisabled,
		swipe: !isSlideDisabled,
		dots: false,
		arrows: false,
	};

	if (getGallerySlider === null) return;

	return (
		<div className={styles.Gallery__container}>
			<Slider {...settings}>
				{getGallerySlider.map((slide: ProductImageAttributesType) => (
					<div
						key={slide.id}
						className={styles.Gallery__container__slide}
						onMouseEnter={() => hoverGetSlideImage(slide)}
					>
						<div className={styles.Gallery__container__slide_background}>
							<img
								src={`${API_URL}${slide.attributes.url}`}
								alt=""
							/>
						</div>
					</div>
				))}
			</Slider>
		</div>
	);
};

export default Gallery;
