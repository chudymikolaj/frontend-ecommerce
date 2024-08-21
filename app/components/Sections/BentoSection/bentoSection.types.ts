import { PageSectionsImageType } from "../PageSections/pageSections.types";

export type BentoSectionType = {
	id: number;
	__component: "sections.bento-section";
	FirstBentoItemName: string;
	SecondBentoItemName: string;
	BentoSectionDescription: string;
	FirstBentoItem: PageSectionsImageType;
	FirstBentoItemButton: {
		id: number;
		Name: string;
		Url: string;
	};
	SecondBentoItemImage: PageSectionsImageType;
	SecondBentoItemButton: {
		id: number;
		Name: string;
		Url: string;
	};
};

export type BentoSectionPropsType = {
	element: BentoSectionType;
};
