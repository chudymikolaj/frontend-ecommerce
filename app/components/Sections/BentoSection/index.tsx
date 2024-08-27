import Link from "next/link";
import ImageComponent from "@components/Image";

import type { BentoSectionPropsType } from "./bentoSection.types";
import styles from "./bentoSection.module.scss";

const CMS_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

const BentoSection = ({ element }: BentoSectionPropsType) => {
	const {
		FirstBentoItemName,
		FirstBentoItemButton,
		FirstBentoItemImage,
		FirstBentoItemBackgroundImage,
		FirstBentoItemBackgroundColor,
		SecondBentoItemName,
		SecondBentoItemButton,
		SecondBentoItemImage,
		SecondBentoItemBackgroundColor,
		SecondBentoItemBackgroundImage,
		BentoSectionDescription,
	} = element;

	const isFirstBentoBackground = `url('${CMS_URL}${FirstBentoItemBackgroundImage.data?.attributes.url}')`;
	const isFirstBentoColor = FirstBentoItemBackgroundColor;
	const isSecondBentoBackground = `url('${CMS_URL}${SecondBentoItemBackgroundImage.data?.attributes.url}')`;
	const isSecondBentoColor = SecondBentoItemBackgroundColor;

	return (
		<div className={styles.BentoSection__container}>
			<div className={styles.BentoSection__container__wrapper}>
				{FirstBentoItemImage && (
					<div
						className={styles.BentoSection__container__firstBento_item}
						style={{ backgroundColor: isFirstBentoColor, backgroundImage: isFirstBentoBackground }}
					>
						<div>
							{FirstBentoItemName && (
								<h3 className={styles.BentoSection__container__item_title}>{FirstBentoItemName}</h3>
							)}
							{FirstBentoItemButton && (
								<Link
									href={FirstBentoItemButton.Url}
									className={styles.BentoSection__container__item_button}
								>
									{FirstBentoItemButton.Name}
								</Link>
							)}
						</div>
						<ImageComponent
							data={FirstBentoItemImage}
							className={styles.BentoSection__container__firstBento__item_image}
						/>
					</div>
				)}
				{BentoSectionDescription && (
					<div className={styles.BentoSection__container__wrapper_text}>{BentoSectionDescription}</div>
				)}
			</div>
			<div
				className={styles.BentoSection__container__lastBento_item}
				style={{ backgroundColor: isSecondBentoColor, backgroundImage: isSecondBentoBackground }}
			>
				<div>
					{SecondBentoItemName && <h3 className={styles.BentoSection__container__item_title}>{SecondBentoItemName}</h3>}
					{SecondBentoItemButton && (
						<Link
							href={SecondBentoItemButton.Url}
							className={styles.BentoSection__container__item_button}
						>
							{SecondBentoItemButton.Name}
						</Link>
					)}
				</div>
				<ImageComponent
					data={SecondBentoItemImage}
					className={styles.BentoSection__container__lastBento__item_image}
				/>
			</div>
		</div>
	);
};

export default BentoSection;
