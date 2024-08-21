import React from "react";
import type { BentoSectionPropsType } from "./bentoSection.types";

const BentoSection = ({ element }: BentoSectionPropsType) => {
	// console.log(element);
	return (
		<div>
			<div>
				<div>Fisrt banner</div>
				<div>text</div>
			</div>
			<div>Secound banner</div>
		</div>
	);
};

export default BentoSection;
