import { notFound } from "next/navigation";
import { axiosGetOnePageRequest } from "@services/axiosRequest";
import ImageComponent from "@components/Image";

import styles from "./homepage.module.scss";
import { CTAButton } from "@components/Buttons";
import PageSections from "@components/Sections/PageSections";

const HomePage = async () => {
	const result = await axiosGetOnePageRequest(
		"/homepage",
		"&populate[ShowcaseMainPage][populate]=*&populate[Sections][populate]=*"
	);

	if (result.length === 0) return notFound;

	const getHomepageAttributes = result[0].attributes;
	const { ShowcaseMainPage, Sections } = getHomepageAttributes;
	const { Header, HeaderImage, DescriptionWithImage } = ShowcaseMainPage;
	const { Header: TextHeader, Text, ButtonName, ButtonUrl } = DescriptionWithImage;

	return (
		<main className={styles.Homepage__container}>
			<div className={styles.Homepage__container__ShowcaseMainPage}>
				<div className={styles.Homepage__container__ShowcaseMainPage__imageWrapper}>
					<h1 className={styles.Homepage__container__ShowcaseMainPage__imageWrapper_title}>{Header}</h1>
					<div className={styles.Homepage__container__ShowcaseMainPage__imageWrapper_image}>
						<ImageComponent data={HeaderImage} />
					</div>
				</div>
				<div className={styles.Homepage__container__ShowcaseMainPage__descriptionAction}>
					<h2 className={styles.Homepage__container__ShowcaseMainPage__descriptionAction_title}>{TextHeader}</h2>
					<p className={styles.Homepage__container__ShowcaseMainPage__descriptionAction_text}>{Text}</p>
					<CTAButton
						name={ButtonName}
						linkTo={ButtonUrl}
					/>
				</div>
			</div>

			<PageSections data={Sections} />
		</main>
	);
};

export default HomePage;
