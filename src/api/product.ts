import { executeGraphql } from "./apiGraphql";
import {
	ProductGetListByCategoryDocument,
	ProductsGetListDocument,
	ProductsGetSingleItemByIdDocument,
} from "@/gql/graphql";
import { type ProductItemType, type ProductResponseItemType } from "@/types/productTypes";

export const getAllProductsLength = async () => {
	const res = await fetch(`https://naszsklep-api.vercel.app/api/products`);
	const responseProducts = (await res.json()) as ProductResponseItemType[];
	const products: ProductItemType[] = responseProducts.map(productResponseItemToProductItem);
	return products.length;
};

export const getProductLists = async () => {
	const grapqlRespone = await executeGraphql(ProductsGetListDocument, {});
	return grapqlRespone.products;
};

export const getProductsListByCategory = async () => {
	const grapqlResponse = await executeGraphql(ProductGetListByCategoryDocument, {
		slug: "t-shirts",
	});
	if (!grapqlResponse.categories[0]?.products) return [];

	return grapqlResponse.categories[0].products;
};

export const getProductResponseItemTypesList = async (
	productsNumber: number,
	offset: number = 0,
) => {
	const res = await fetch(
		`https://naszsklep-api.vercel.app/api/products?take=${productsNumber}&offset=${offset}`,
	);
	const responseProducts = (await res.json()) as ProductResponseItemType[];
	const products: ProductItemType[] = responseProducts.map(productResponseItemToProductItem);
	return products;
};

// export const getProductResponseItemTypeById = async (id: string) => {
// 	const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);
// 	const responseProduct = (await res.json()) as ProductResponseItemType;
// 	const product: ProductItemType = productResponseItemToProductItem(responseProduct);
// 	return product;
// };

export const getProductItemById = async (id: string) => {
	const grapqlResponse = await executeGraphql(ProductsGetSingleItemByIdDocument, { id });
	if (!grapqlResponse.product) return null;

	return grapqlResponse.product;
};

const productResponseItemToProductItem = (product: ProductResponseItemType): ProductItemType => ({
	id: product.id,
	category: product.category,
	name: product.title,
	price: product.price,
	description: product.description,
	coverImage: {
		alt: product.title,
		src: product.image,
	},
});
