import Image from "next/image";
import Link from "next/link";

import AddToCartButton from "@components/Buttons/addToCartButtonProductSection";
import Currency from "@lib/currency";

import styles from "./ProductItem.module.scss";
import type { ProductItemPropsType } from "./ProductItem.types";

const API_CMS = process.env.NEXT_PUBLIC_STRAPI_URL;

const ProductItem = ({ attributes, onClick }: ProductItemPropsType) => {
	const { name, price, slug, image } = attributes;
	const getProductImage = `${API_CMS}${image.data.attributes.url}`;

	return (
		<Link
			href={`/product/${slug}`}
			onClick={onClick}
			className={styles.ProductItem__link}
		>
			<div className={styles.ProductItem__container}>
				<Image
					className={styles.ProductItem__container_image}
					src={`${getProductImage}`}
					width={160}
					height={160}
					alt={name}
				/>
				<div className={styles.ProductItem__container__wrapper}>
					<p className={styles.ProductItem__container__wrapper_name}>{name}</p>
					<div className={styles.ProductItem__container__wrapper__information}>
						<p className={styles.ProductItem__container__wrapper__information_price}>
							<Currency price={price.toString()} />
						</p>
						<AddToCartButton
							productData={attributes}
							extendedClass={styles.ProductItem__container_AddToCartButton}
						/>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default ProductItem;
