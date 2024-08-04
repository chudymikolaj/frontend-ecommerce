import { notFound } from "next/navigation";

import Product from "@components/Product";
import { axiosGetProductBySlug } from "@services/baseService";

import type { Params, ProductPage } from "./page.types";
import styles from "./product.module.scss";

export async function generateMetadata({ params }: Params) {
	const getSlug = params.slug;
	const getProductBySlug = await axiosGetProductBySlug(getSlug);

	return {
		title: getProductBySlug?.attributes.name,
	};
}

const ProductPage = async ({ params }: ProductPage) => {
	const getSlug = params.slug;
	const getProductBySlug = await axiosGetProductBySlug(getSlug);

	if (getProductBySlug === undefined) notFound();

	return (
		<main className={styles.Product_container}>
			<Product product={getProductBySlug} />
		</main>
	);
};

export default ProductPage;
