import ProductsSection from "@components/Sections/ProductsSection";
import BentoSection from "@components/Sections/BentoSection";

import type { PageSectionsPropsType } from "./pageSections.types";
import type { BentoSectionType } from "../BentoSection/BentoSection.types";
import { ProductSectionType } from "../ProductsSection/productSection.types";

const PageSections = ({ data }: PageSectionsPropsType) => {
	const isProductSection = (item: any): item is ProductSectionType => {
		return item.__component === "sections.section-products";
	};

	const isBentoSection = (item: any): item is BentoSectionType => {
		return item.__component === "sections.bento-section";
	};

	return (
		<div>
			{data.map((item, index) => {
				if (isProductSection(item)) {
					return (
						<ProductsSection
							key={item.id}
							element={item}
						/>
					);
				}

				if (isBentoSection(item)) {
					return (
						<BentoSection
							key={item.id}
							element={item}
						/>
					);
				}

				return null; // or handle unknown component types
			})}
		</div>
	);
};

export default PageSections;
