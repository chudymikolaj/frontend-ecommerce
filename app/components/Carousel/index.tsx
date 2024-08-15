"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import ProductItem from "../Sections/ProductsSection/ProductItem";

// Import Swiper styles
import "swiper/css";
import styles from "./carousel.module.scss";
import type { CarouselComponentPropsType } from "./carouselComponent.types";

const CarouselComponent = ({ products }: CarouselComponentPropsType) => {
	const settings = {
		spaceBetween: 6,
		slidesPerView: 2,
		freeMode: true,
		breakpoints: {
			320: {
				slidesPerView: 2,
			},
			480: {
				slidesPerView: 3,
				spaceBetween: 12,
			},
			992: {
				slidesPerView: 4,
				spaceBetween: 18,
			},
		},
	};

	return (
		<>
			<Swiper
				{...settings}
				className={styles.CarouselComponent__container}
			>
				{products.data.map(({ attributes }) => {
					const { idProduct } = attributes;

					return (
						<SwiperSlide key={idProduct}>
							<ProductItem attributes={attributes} />
						</SwiperSlide>
					);
				})}
			</Swiper>
		</>
	);
};

export default CarouselComponent;
