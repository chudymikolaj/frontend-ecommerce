export type PageSectionsImageType = {
	data: {
		id: number;
		attributes: {
			name: string;
			alternativeText: string | null;
			caption: string | null;
			width: number;
			height: number;
			formats: Object[];
			hash: string;
			ext: ".png";
			mime: "image/png";
			size: number;
			url: string;
			previewUrl: string | null;
			provider: "local";
			provider_metadata: null;
		};
	};
};

export type PageSectionsPropsType = {
	data: (
		| {
				id: number;
				__component: "sections.section-products";
				CountOfProducts: number;
				HeaderTitle: string;
				CategoryProducts: string;
		  }
		| {
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
		  }
	)[];
};
