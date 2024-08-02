import ProductsSection from "@components/Sections/ProductSection";
import { PageProductPropsType } from "./pageSections.types";

const PageSections = ({ data }: PageProductPropsType) => {
	const sectionObjects = { "sections.section-products": ProductsSection };

	return (
		<main>
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
		</main>
	);
};

export default PageSections;
