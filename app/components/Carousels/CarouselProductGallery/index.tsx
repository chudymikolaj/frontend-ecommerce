"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import styles from "./CarouselProductGallery.module.scss";
import type { CarouselProductsGalleryPropsType } from "@components/Carousels/CarouselProductGallery/CarouselProductGallery.types";
import type { ProductImageAttributesType } from "@services/baseService.types";

const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

const CarouselProductGalleryComponent = ({
	productGallery,
	activeImage,
	hoverGetSlideImage,
}: CarouselProductsGalleryPropsType) => {
	const settings = {
		slidesPerView: 3,
		freeMode: true,
		breakpoints: {
			320: {
				slidesPerView: 4,
			},
		},
	};

	return (
		<>
			<Swiper
				{...settings}
				className={styles.CarouselProductGallery__container}
			>
				{productGallery.map((slide: ProductImageAttributesType) => {
					const isActiveImage = slide.attributes.url === activeImage ? styles.active : "";

					return (
						<SwiperSlide key={slide.id}>
							<div
								className={styles.CarouselProductGallery__container__slide}
								onMouseEnter={() => hoverGetSlideImage(slide)}
							>
								<div className={`${styles.CarouselProductGallery__container__slide_background} ${isActiveImage}`}>
									<img
										src={`${API_URL}${slide.attributes.url}`}
										alt={slide.attributes.alternativeText}
									/>
								</div>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</>
	);
};

export default CarouselProductGalleryComponent;
