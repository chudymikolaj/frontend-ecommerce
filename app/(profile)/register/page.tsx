import RegisterForm from "@components/Form/RegisterForm";
import RedirectToDashboard from "@services/authRedirect";

import styles from "./register.module.scss";

const Register = async () => {
	await RedirectToDashboard();

	return (
		<main className={styles.RegisterPage_container}>
			<RegisterForm />
		</main>
	);
};

export default Register;
