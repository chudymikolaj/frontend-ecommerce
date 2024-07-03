import RegisterForm from "@components/Form/RegisterForm";

import styles from "./register.module.scss";

const Register = () => {
	return (
		<main className={styles.RegisterPage_container}>
			<RegisterForm />
		</main>
	);
};

export default Register;
