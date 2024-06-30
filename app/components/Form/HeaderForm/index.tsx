import type { ReactNode } from "react";
import styles from "./headerForm.module.scss";

const HeaderForm = ({ children }: { children: ReactNode }) => {
	return <h2 className={styles.HeaderForm__text}>{children}</h2>;
};

export default HeaderForm;
