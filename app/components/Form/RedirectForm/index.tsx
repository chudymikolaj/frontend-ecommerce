import styles from "./redirectForm.module.scss";

interface RedirectForm {
	url: `/${string}`;
	text: string;
	name: string;
}

const RedirectForm = ({ url, text, name }: RedirectForm) => {
	return (
		<div className={styles.LoginInformation__container}>
			<span>{text}</span>
			<a
				href={url}
				className={styles.LoginInformation__container_link}
			>
				{name}
			</a>
		</div>
	);
};

export default RedirectForm;
