export type ProductResponseItemType = {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: TRating;
	image: string;
	longDescription: string;
};

export type TRating = {
	rate: number;
	count: number;
};

export type ProductItemType = {
	id: string;
	category: string;
	name: string;
	price: number;
	coverImage: {
		src: string;
		alt: string;
	};
};
