"use client";

import { FormikHelpers } from "formik";
import { signIn } from "next-auth/react";
import * as Yup from "yup";

import { ButtonSubmitForm, FormikForm, HeaderForm, InputForm, RedirectForm } from "@components/Form";
import { register } from "@services/authService";

import styles from "./registerForm.module.scss";

interface interfaceValues {
	username: string;
	email: string;
	password: string;
}

const SignupSchema = Yup.object().shape({
	username: Yup.string()
		.min(3, "Nazwa użytkownika musi składać się z co najmniej 3 znaków")
		.required("Podaj nazwę konta. Powinno składać się minimum z 3 znaków."),
	email: Yup.string()
		.matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Podaj prawidłowy adres e-mail.")
		.min(6)
		.required("Podaj e-mail. Powinno składać się minimum z 6 znaków."),
	password: Yup.string()
		.min(8, "Hasło musi zawierać co najmniej 8 znaków.")
		.required("Wpisz hasło. Powinno składać się minimum z 8 znaków."),
});

const RegisterForm = () => {
	const formValue = {
		username: "",
		email: "",
		password: "",
	};

	const handleSubmit = async (values: interfaceValues, { setSubmitting }: FormikHelpers<interfaceValues>) => {
		await register(values.username, values.email, values.password);
		await signIn("credentials", {
			identifier: values.email,
			password: values.password,
			callbackUrl: `${window.location.origin}/`,
		});

		setSubmitting(false);
	};
	return (
		<div className={styles.RegisterForm__container}>
			<HeaderForm>Rejestracja użytkownika</HeaderForm>
			<FormikForm
				validationSchema={SignupSchema}
				dataValues={formValue}
				onSubmit={handleSubmit}
			>
				<InputForm
					inputId="username"
					placeholder="Nazwa konta (wymaganae)"
					type="text"
				/>
				<InputForm
					inputId="email"
					placeholder="E-mail (wymaganae)"
					type="email"
				/>
				<InputForm
					inputId="password"
					placeholder="Hasło (wymaganae)"
					type="password"
				/>
				<ButtonSubmitForm buttonName="Załóż konto" />
			</FormikForm>
			<RedirectForm
				url="/login"
				text="Masz już konto?"
				name="Zaloguj się"
			/>
		</div>
	);
};

export default RegisterForm;
