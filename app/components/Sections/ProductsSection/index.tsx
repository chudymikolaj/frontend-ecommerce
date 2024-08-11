import Image from "next/image";
import Link from "next/link";

import AddToCartButton from "@components/Buttons/addToCartButtonProductSection";
import Currency from "@lib/currency";
import { axiosGetOneCategoryRequest } from "@services/axiosRequest";

import styles from "./productSection.module.scss";
import { ProductSectionPropsType } from "./productSection.types";

const API_CMS = process.env.NEXT_PUBLIC_STRAPI_URL;

const ProductsSection = async ({ element }: ProductSectionPropsType) => {
	const { HeaderTitle } = element;

	const result = await axiosGetOneCategoryRequest("aeropress", "populate[products][populate]=*");
	const { products } = result[0].attributes;

	return (
		<div className={styles.ProductsSection__container}>
			<h2 className={styles.ProductsSection__container_header}>{HeaderTitle}</h2>
			<div className={styles.ProductsSection__container__products}>
				{products.data.map(({ attributes }) => {
					const { name, price, slug, image } = attributes;
					const getProductImage = `${API_CMS}${image.data.attributes.url}`;

					return (
						<Link href={`/product/${slug}`}>
							<div className={styles.ProductsSection__container__products__product}>
								<Image
									className={styles.ProductsSection__container__products__product_image}
									src={`${getProductImage}`}
									width={160}
									height={160}
									alt={name}
								/>
								<div className={styles.ProductsSection__container__products__product__wrapper}>
									<p className={styles.ProductsSection__container__products__product__wrapper_information_name}>
										{name}
									</p>
									<div className={styles.ProductsSection__container__products__product__wrapper_information}>
										<p className={styles.ProductsSection__container__products__product__wrapper_information_price}>
											<Currency price={price.toString()} />
										</p>
										<AddToCartButton
											productData={attributes}
											className={styles.ProductsSection__container_AddToCartButton}
										/>
									</div>
								</div>
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default ProductsSection;
