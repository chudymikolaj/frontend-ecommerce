import styles from "@styles/grid.module.scss";

const ProductPageLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return <div className={styles.container}>{children}</div>;
};

export default ProductPageLayout;
