export type HomepageAxiosGetOnePageRequestType = {
	data: {
		id: number;
		attributes: {
			title: string;
			slug: string;
			createdAt: string;
			updatedAt: string;
			publishedAt: string;
			locale: "en";
			ShowcaseMainPage: {
				id: number;
				Header: string;
				HeaderImage: {
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
				DescriptionWithImage: {
					id: number;
					Header: string;
					Text: string;
					ButtonName: string;
					ButtonUrl: string;
				};
			};
			Sections: [
				{
					id: number;
					__component: "sections.section-products";
					CountOfProducts: number;
					HeaderTitle: string;
					CategoryProducts: string;
				}
			];
		};
	}[];
};
