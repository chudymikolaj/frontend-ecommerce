import type { ProductImageType } from "@/app/lib/services/baseService.types";
import Image from "next/image";
import type { PageSectionsImageType } from "../Sections/PageSections/pageSections.types";

const CMS_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

type ImageComponentProps = {
	data: ProductImageType | PageSectionsImageType;
	className?: string;
};

const ImageComponent = ({ data, className }: ImageComponentProps) => {
	if (!data) return;

	const { name, url, width, height, alternativeText } = data?.data.attributes;
	const isAlt = alternativeText ? alternativeText : name;

	const isWidth = width ? width : 700;
	const isHeight = height ? height : 700;

	return (
		<Image
			priority={true}
			src={`${CMS_URL}${url}`}
			width={isWidth}
			height={isHeight}
			alt={isAlt}
			className={className}
		/>
	);
};

export default ImageComponent;
