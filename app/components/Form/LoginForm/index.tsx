"use client";

import { FormikHelpers } from "formik";
import { signIn } from "next-auth/react";
import * as Yup from "yup";

import { ButtonSubmitForm, FormikForm, HeaderForm, InputForm, RecoverPassword, RedirectForm } from "@components/Form";

import styles from "./loginForm.module.scss";

interface interfaceValues {
	identifier: string;
	password: string;
}

const SignupSchema = Yup.object().shape({
	identifier: Yup.string().required("Podaj login lub e-mail"),
	password: Yup.string().required("Wpisz hasło. Pole nie może być puste"),
});

const LoginForm = () => {
	const formValue = {
		identifier: "",
		password: "",
	};

	const handleSubmit = async (values: interfaceValues, { setSubmitting }: FormikHelpers<interfaceValues>) => {
		await signIn("credentials", {
			...values,
			callbackUrl: `${window.location.origin}/dashboard`,
		});
		setSubmitting(false);
	};
	return (
		<div className={styles.LoginForm__container}>
			<HeaderForm>Zaloguj się</HeaderForm>
			<FormikForm
				validationSchema={SignupSchema}
				dataValues={formValue}
				onSubmit={handleSubmit}
			>
				<InputForm
					inputId="identifier"
					placeholder="Wpisz login"
					type="identifier"
				/>
				<InputForm
					inputId="password"
					placeholder="Wpisz hasło"
					type="password"
				/>
				<RecoverPassword />
				<ButtonSubmitForm buttonName="Zaloguj się" />
			</FormikForm>
			<RedirectForm
				url="/register"
				text="Nie masz konta?"
				name="Zarejestruj się"
			/>
		</div>
	);
};

export default LoginForm;
