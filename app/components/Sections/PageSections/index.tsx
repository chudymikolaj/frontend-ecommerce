import ProductsSection from "@/app/components/Sections/ProductsSection";
import type { PageProductPropsType } from "./pageSections.types";

const PageSections = ({ data }: PageProductPropsType) => {
	const sectionObjects = { "sections.section-products": ProductsSection };

	return (
		<div>
			{data.map((item, index) => {
				if (item) {
					const Component = sectionObjects[item.__component];
					// console.log(Component);

					if (Component) {
						return (
							<Component
								key={item.id}
								element={item}
							/>
						);
					}
				}

				return null; // or handle unknown component types
			})}
		</div>
	);
};

export default PageSections;
