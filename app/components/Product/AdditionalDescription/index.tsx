import React from "react";

type AdditionalProductDescriptionProps = {
	attributes: {
		description: string;
	};
};

const AdditionalProductDescription = ({ attributes }: AdditionalProductDescriptionProps) => {
	const getProductDescription = attributes.description;

	return (
		<div>
			<h3>Opis produktu</h3>
			<p>{getProductDescription}</p>
		</div>
	);
};

export default AdditionalProductDescription;
