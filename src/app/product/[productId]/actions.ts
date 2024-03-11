"use server";

import { executeGraphql } from "@/api/apiGraphql";
import { ProductAddReviewDocument } from "@/gql/graphql";

export const addReview = async ({
	author,
	description,
	email,
	productId,
	rating,
	title,
}: {
	author: string;
	description: string;
	email: string;
	productId: string;
	rating: number;
	title: string;
}) => {
	await executeGraphql({
		query: ProductAddReviewDocument,
		variables: {
			author: author,
			description: description,
			email: email,
			productId: productId,
			rating: rating,
			title: title,
		},
	});
};
