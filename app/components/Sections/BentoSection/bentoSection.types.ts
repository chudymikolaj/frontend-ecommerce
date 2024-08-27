import { PageSectionsImageType } from "../PageSections/pageSections.types";

export type BentoSectionType = {
	id: number;
	__component: "sections.bento-section";
	FirstBentoItemName: string;
	FirstBentoItemImage: PageSectionsImageType;
	FirstBentoItemButton: {
		id: number;
		Name: string;
		Url: string;
	};
	FirstBentoItemBackgroundColor: string;
	FirstBentoItemBackgroundImage: PageSectionsImageType;
	SecondBentoItemName: string;
	SecondBentoItemImage: PageSectionsImageType;
	SecondBentoItemButton: {
		id: number;
		Name: string;
		Url: string;
	};
	SecondBentoItemBackgroundColor: string;
	SecondBentoItemBackgroundImage: PageSectionsImageType;
	BentoSectionDescription: string;
};

export type BentoSectionPropsType = {
	element: BentoSectionType;
};
