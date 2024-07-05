export type LinkTypes = {
	id: number;
	Name: string;
	Url: string;
};

export type LinkWithIconTypes = {
	id: number;
	Name: string;
	Url: string;
	Icon: {
		data: {
			id: number;
			attributes: {
				name: string;
				alternativeText: string | null;
				url: string;
			};
		};
	};
};

export type UserLinksTypes = {
	id: number;
	UserLink: LinkWithIconTypes;
	UserLinks: LinkWithIconTypes[];
};
