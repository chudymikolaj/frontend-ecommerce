import type { ProductImageType } from "@/app/lib/services/baseService.types";
import Image from "next/image";

import React from "react";

const CMS_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

type ImageComponentProps = {
	data: ProductImageType;
};

const ImageComponent = ({ data }: ImageComponentProps) => {
	if (!data) return;

	const { name, url, width, height, alternativeText } = data?.data.attributes;
	const isAlt = alternativeText ? alternativeText : name;

	return (
		<Image
			src={`${CMS_URL}${url}`}
			width={width}
			height={height}
			alt={isAlt}
		/>
	);
};

export default ImageComponent;