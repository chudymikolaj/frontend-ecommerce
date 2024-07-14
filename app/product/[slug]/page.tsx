import { notFound } from "next/navigation";

import Product from "@components/Product";
import { axiosGetProductBySlug } from "@services/baseService";

import styles from "@styles/grid.module.scss";
import type { Params, ProductPage } from "./page.types";

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
		<main className={styles.container}>
			<Product product={getProductBySlug} />
		</main>
	);
};

export default ProductPage;
