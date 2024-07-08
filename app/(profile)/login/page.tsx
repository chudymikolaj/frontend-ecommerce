import LoginForm from "@components/Form/LoginForm";
import RedirectToDashboard from "@services/authRedirect";

import styles from "./login.module.scss";

const LoginPage = async () => {
	await RedirectToDashboard();

	return (
		<main className={styles.LoginPage_container}>
			<LoginForm />
		</main>
	);
};

export default LoginPage;
