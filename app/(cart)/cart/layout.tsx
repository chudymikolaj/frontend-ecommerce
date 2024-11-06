import styles from "@styles/grid.module.scss";

const CartLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return <div className={styles.container}>{children}</div>;
};

export default CartLayout;
