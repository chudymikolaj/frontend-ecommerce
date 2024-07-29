import Image from "next/image";

import React from "react";

const CMS_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

type ImageComponentProps = {
	data: {
		data: {
			id: number;
			attributes: {
				name: string;
				alternativeText: string | null;
				caption: string | null;
				width: number;
				height: number;
				formats: [Object];
				hash: string;
				ext: ".png";
				mime: "image/png";
				size: number;
				url: string;
				previewUrl: string | null;
				provider: "local";
				provider_metadata: null;
				createdAt: string;
				updatedAt: string;
			};
		};
	};
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
