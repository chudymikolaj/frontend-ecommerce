"use client";

import { postProductToOrderCollection } from "@store/cartSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { type MouseEvent } from "react";
import type { AddToCartButtonPropsType } from "./buttons.types";

import styles from "./buttons.module.scss";

const AddToCartButtonProductSection = ({ productData, className }: AddToCartButtonPropsType) => {
	const dispatch = useAppDispatch();
	const getLoading = useAppSelector((state) => state.cart.loading);
	const isLoading = getLoading === "pending" ? true : false;

	const handleAddToCart = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		const { idProduct, name, slug, price, image } = productData;

		const dataToAddToCart = {
			IdProduct: idProduct,
			Name: name,
			Slug: slug,
			Price: price,
			Quantity: 1,
			Image: image,
		};

		dispatch(postProductToOrderCollection(dataToAddToCart));
	};

	return (
		<button
			className={`${styles.AddToCartButtonProductSection__container__button} ${className}`}
			onClick={handleAddToCart}
			disabled={isLoading}
		>
			{isLoading ? (
				<div className={styles.spinner__container}>
					<svg
						className={styles.spinner__container__svg}
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
							opacity=".25"
						/>
						<path
							d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
							className={styles.spinner__container__svg_icon}
						/>
					</svg>
				</div>
			) : (
				<svg
					viewBox="0 0 18 17"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clip-path="url(#clip0_146_128)">
						<path d="M8.71256 6.47619V4.04762H6.24879V2.42857H8.71256V0H10.3551V2.42857H12.8188V4.04762H10.3551V6.47619H8.71256ZM5.42754 17C4.97584 17 4.58917 16.8415 4.26751 16.5244C3.94585 16.2073 3.78502 15.8262 3.78502 15.381C3.78502 14.9357 3.94585 14.5546 4.26751 14.2375C4.58917 13.9204 4.97584 13.7619 5.42754 13.7619C5.87923 13.7619 6.2659 13.9204 6.58756 14.2375C6.90922 14.5546 7.07005 14.9357 7.07005 15.381C7.07005 15.8262 6.90922 16.2073 6.58756 16.5244C6.2659 16.8415 5.87923 17 5.42754 17ZM13.6401 17C13.1884 17 12.8017 16.8415 12.4801 16.5244C12.1584 16.2073 11.9976 15.8262 11.9976 15.381C11.9976 14.9357 12.1584 14.5546 12.4801 14.2375C12.8017 13.9204 13.1884 13.7619 13.6401 13.7619C14.0918 13.7619 14.4785 13.9204 14.8001 14.2375C15.1218 14.5546 15.2826 14.9357 15.2826 15.381C15.2826 15.8262 15.1218 16.2073 14.8001 16.5244C14.4785 16.8415 14.0918 17 13.6401 17ZM0.5 2.42857V0.809524H3.18961L6.67995 8.09524H12.4287L15.6316 2.42857H17.5L13.8865 8.86429C13.7359 9.13413 13.534 9.34325 13.2808 9.49167C13.0276 9.64008 12.7504 9.71429 12.4493 9.71429H6.33092L5.42754 11.3333H15.2826V12.9524H5.42754C4.81159 12.9524 4.34279 12.6893 4.02113 12.1631C3.69948 11.6369 3.68921 11.104 3.99034 10.5643L5.09903 8.58095L2.14251 2.42857H0.5Z" />
					</g>
					<defs>
						<clipPath id="clip0_146_128">
							<rect
								width="17"
								height="17"
								fill="white"
								transform="translate(0.5)"
							/>
						</clipPath>
					</defs>
				</svg>
			)}
		</button>
	);
};

export default AddToCartButtonProductSection;
