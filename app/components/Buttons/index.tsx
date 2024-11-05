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

export const ActionButton = ({ action, children }: any) => {
	return (
		<button
			className={styles.ActionButton}
			onClick={action}
		>
			{children}
		</button>
	);
};

export const SubmitButton = ({ action, children }: any) => {
	return (
		<button
			className={styles.SubmitButton}
			onClick={action}
		>
			{children}
		</button>
	);
};
