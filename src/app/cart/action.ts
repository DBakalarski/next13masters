"use server";

import { revalidateTag } from "next/cache";
import { executeGraphql } from "@/api/apiGraphql";
import { CartChangeItemQuantityDocument, CartRemoveItemDocument } from "@/gql/graphql";

export const changeItemQuantity = async (productId: string, quantity: number, cartId: string) => {
	await executeGraphql({
		query: CartChangeItemQuantityDocument,
		variables: {
			id: cartId,
			productId: productId,
			quantity: quantity,
		},
		next: { tags: ["cart"] },
	});
	revalidateTag("cart");
};

export const removeItem = async (productId: string, cartId: string) => {
	await executeGraphql({
		query: CartRemoveItemDocument,
		variables: {
			id: cartId,
			productId: productId,
		},
	});
};
