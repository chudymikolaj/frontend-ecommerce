import Link from "next/link";

import styles from "./primaryButton.module.scss";

type PrimaryButtonPropsType = {
	linkTo: string;
	name: string;
};

const PrimaryButton = ({ linkTo, name }: PrimaryButtonPropsType) => {
	return (
		<Link
			href={linkTo}
			className={styles.PrimaryButton}
		>
			{name}
		</Link>
	);
};

export default PrimaryButton;
