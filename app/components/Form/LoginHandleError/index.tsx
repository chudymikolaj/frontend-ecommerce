"use client";

import { useSearchParams } from "next/navigation";

import styles from "./loginHandleError.module.scss";

const LoginHandleError = () => {
	const searchParams = useSearchParams();
	const getParamsError = searchParams.get("error");
	const isError = getParamsError === "Invalid credentials";

	if (isError)
		return <div className={styles.LoginHandleError__container}>Sprawdź, czy adres e-mail i hasło są poprawne</div>;
};

export default LoginHandleError;
