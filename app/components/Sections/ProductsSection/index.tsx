import { axiosGetOneCategoryRequest } from "@services/axiosRequest";

import styles from "./productSection.module.scss";
import { ProductSectionPropsType } from "./productSection.types";
import ProductItem from "./ProductItem";

const ProductsSection = async ({ element }: ProductSectionPropsType) => {
	const { HeaderTitle } = element;

	const result = await axiosGetOneCategoryRequest("aeropress", "populate[products][populate]=*");
	const { products } = result[0].attributes;

	return (
		<div className={styles.ProductsSection__container}>
			<h2 className={styles.ProductsSection__container_header}>{HeaderTitle}</h2>
			<div className={styles.ProductsSection__container__products}>
				{products.data.map(({ attributes }) => {
					const { idProduct } = attributes;

					return (
						<ProductItem
							key={idProduct}
							attributes={attributes}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default ProductsSection;
