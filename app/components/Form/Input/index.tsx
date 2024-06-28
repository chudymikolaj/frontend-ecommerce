import React from "react";
import { ErrorMessage, Field } from "formik";

import styles from "./input.module.scss";

type InputFormProps = {
	inputId: string;
	placeholder: string;
	type: string;
};

const InputForm = ({ inputId, placeholder, type, ...props }: InputFormProps) => {
	return (
		<div className={styles.InputField}>
			<Field name={inputId}>
				{({ field, form, meta }: any) => (
					<div>
						<input
							id={inputId}
							{...field}
							className={`${styles.InputField__input} ${
								meta.touched && meta.error ? styles.InputField__input_error : ""
							}`}
							placeholder={placeholder}
							type={type}
							{...props}
						/>
					</div>
				)}
			</Field>

			<ErrorMessage
				name={inputId}
				component="div"
				className={styles.InputField__error}
			/>
		</div>
	);
};

export default InputForm;
