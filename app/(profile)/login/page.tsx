import LoginForm from "@components/Form/LoginForm";

import styles from "./login.module.scss";

const LoginPage = () => {
	return (
		<main className={styles.LoginPage_container}>
			<LoginForm />
		</main>
	);
};

export default LoginPage;
