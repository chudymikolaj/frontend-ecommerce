export type ProductSectionType = {
	id: number;
	__component: "sections.section-products";
	CountOfProducts: number;
	HeaderTitle: string;
	CategoryProducts: string;
};

export type ProductSectionPropsType = {
	element: ProductSectionType;
};
