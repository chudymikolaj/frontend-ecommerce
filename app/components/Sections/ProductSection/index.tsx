import Link from "next/link";
import Image from "next/image";

import { axiosGetOneCategoryRequest } from "@services/axiosRequest";
import { ProductSectionPropsType } from "./productSection.types";
import styles from "./productSection.module.scss";

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
					const { name, slug, image } = attributes;
					const getProductImage = `${API_CMS}${image.data.attributes.url}`;

					return (
						<Link href={`/product/${slug}`}>
							<div className={styles.ProductsSection__container__products__product}>
								<Image
									className={styles.ProductsSection__container__products__product_image}
									src={`${getProductImage}`}
									width={175}
									height={175}
									alt={name}
								/>
								<p className={styles.ProductsSection__container__products__product_name}>{name}</p>
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default ProductsSection;
