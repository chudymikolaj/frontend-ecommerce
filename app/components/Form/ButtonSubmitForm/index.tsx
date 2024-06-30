import styles from "./buttonSubmitForm.module.scss";

type ButtonSubmitFormProps = {
	buttonName: string;
};

const ButtonSubmitForm = ({ buttonName }: ButtonSubmitFormProps) => {
	return (
		<button
			type="submit"
			className={styles.SubmitButton}
		>
			{buttonName}
		</button>
	);
};

export default ButtonSubmitForm;
