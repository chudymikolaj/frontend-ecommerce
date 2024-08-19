"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import ProductItem from "@components/Sections/ProductsSection/ProductItem";

import "swiper/css";

import styles from "./carouselProducts.module.scss";
import type { CarouselProductsPropsType } from "@components/Carousels/CarouselProducts/CarouselProducts.types";

const CarouselProductsComponent = ({ products }: CarouselProductsPropsType) => {
	const isLoopItems = products.data.length > 4 ? true : false;

	const settings = {
		spaceBetween: 6,
		slidesPerView: 2,
		freeMode: true,
		loop: isLoopItems,
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
				className={styles.CarouselProductsComponent__container}
			>
				{products.data.map(({ attributes }, index) => {
					const { idProduct } = attributes;

					return (
						<SwiperSlide
							key={idProduct}
							virtualIndex={index}
						>
							<ProductItem attributes={attributes} />
						</SwiperSlide>
					);
				})}
			</Swiper>
		</>
	);
};

export default CarouselProductsComponent;
