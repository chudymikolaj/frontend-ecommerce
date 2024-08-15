import { axiosGetOneCategoryRequest } from "@services/axiosRequest";

import CarouselComponent from "@components/Carousel";

import styles from "./productSection.module.scss";
import { ProductSectionPropsType } from "./productSection.types";

const ProductsSection = async ({ element }: ProductSectionPropsType) => {
	const { HeaderTitle } = element;

	const result = await axiosGetOneCategoryRequest("aeropress", "populate[products][populate]=*");
	const { products } = result[0].attributes;

	return (
		<div className={styles.ProductsSection__container}>
			<h2 className={styles.ProductsSection__container_header}>{HeaderTitle}</h2>
			<CarouselComponent products={products} />
		</div>
	);
};

export default ProductsSection;
