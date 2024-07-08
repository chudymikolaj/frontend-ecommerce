import React from "react";

import styles from "./dropdownCart.module.scss";

type DropdownCart = {
	className: string;
};

const DropdownCart = ({ className }: DropdownCart) => {
	return (
		<div className={`${styles.DropdownCart__container} ${className}`}>
			<div className={styles.DropdownCart__container_products}>
				<div className={styles.DropdownCart__container_products_empty}>
					<p className={styles.DropdownCart__container_products_empty_text}>Twój koszyk jest pusty</p>
				</div>
			</div>
		</div>
	);
};

export default DropdownCart;
