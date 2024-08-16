"use client";

import { useState } from "react";
import Gallery from "@components/Product/Gallery";

import styles from "./image.module.scss";
import { ImageProductProps, SlideImageProductProps } from "./image.types";

const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

const ImageProduct = ({ attributes }: ImageProductProps) => {
	const getProductImage = attributes.image.data.attributes;
	const getAlternativeText = getProductImage.alternativeText;
	const getUrlImage = `${API_URL}${getProductImage.url}`;
	const getProductGallery = attributes.productGallery;
	const [mainImage, setMainImage] = useState(getUrlImage);
	const [isCheckImage, setIsCheckImage] = useState(getProductImage.url);

	const handleSlideImage = (slide: SlideImageProductProps) => {
		const getUrlSlideImage = slide.attributes.url;
		const changeMainImage = `${API_URL}${getUrlSlideImage}`;
		setMainImage(changeMainImage);
		setIsCheckImage(getUrlSlideImage);
	};

	return (
		<div className={styles.ImageProduct__container}>
			<div className={styles.ImageProduct__container__wrapper}>
				<img
					className={styles.ImageProduct__container__wrapper_image}
					src={mainImage}
					alt={getAlternativeText}
				/>
			</div>

			<Gallery
				productGallery={getProductGallery}
				hoverGetSlideImage={handleSlideImage}
				activeImage={isCheckImage}
			/>
		</div>
	);
};

export default ImageProduct;
