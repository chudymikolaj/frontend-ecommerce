import AddToCartButton from "../AddToCartButton";

import styles from "./mainInfromation.module.scss";
import { MainInformationProps } from "./mainInformation.types";
import Currency from "@/app/lib/currency";

const MainInformation = ({ attributes }: MainInformationProps) => {
	const getProductName = attributes.name;
	const getProductPrice = attributes.price.toString();

	return (
		<div className={styles.MainInformation__container}>
			<div className={styles.MainInformation__container__wrapper}>
				<h1 className={styles.MainInformation__container__wrapper_name}>{getProductName}</h1>
			</div>
			<div>
				<p className={styles.MainInformation__container__wrapper_price}>
					<Currency price={getProductPrice} />
				</p>

				<AddToCartButton attributes={attributes} />
			</div>
		</div>
	);
};

export default MainInformation;
