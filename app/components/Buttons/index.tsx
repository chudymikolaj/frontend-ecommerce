import Link from "next/link";

import styles from "./buttons.module.scss";
import type { PrimaryButtonPropsType } from "./buttons.types";

export const PrimaryButton = ({ linkTo, name }: PrimaryButtonPropsType) => {
	return (
		<Link
			href={linkTo}
			className={styles.PrimaryButton}
		>
			{name}
		</Link>
	);
};

export const BorderButton = ({ linkTo, name }: PrimaryButtonPropsType) => {
	return (
		<Link
			href={linkTo}
			className={styles.BorderButton}
		>
			{name}
		</Link>
	);
};

export const InfoButton = ({ linkTo, name }: PrimaryButtonPropsType) => {
	return (
		<Link
			href={linkTo}
			className={styles.InfoButton}
		>
			{name}
		</Link>
	);
};

export const CTAButton = ({ linkTo, name }: PrimaryButtonPropsType) => {
	return (
		<Link
			href={linkTo}
			className={styles.CTAButton}
		>
			{name}
		</Link>
	);
};
