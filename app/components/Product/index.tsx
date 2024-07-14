import AdditionalProductDescription from "./AdditionalDescription";
import ImageProduct from "./Image";
import MainInformation from "./MainInformation";

import styles from "./product.module.scss";
import type { ProductProps } from "./product.types";

const Product = ({ product }: ProductProps) => {
	const getProductAttributes = product?.attributes;

	return (
		<div className={styles.Product__container}>
			<div className={styles.Product__container__wrapper}>
				<ImageProduct attributes={getProductAttributes} />
				<MainInformation attributes={getProductAttributes} />
			</div>
			<AdditionalProductDescription attributes={getProductAttributes} />
		</div>
	);
};

export default Product;
