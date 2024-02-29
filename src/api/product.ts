import { executeGraphql } from "./apiGraphql";
import {
	ProductGetCategoriesDocument,
	ProductGetListByCategoryDocument,
	ProductsGetListDocument,
	ProductsGetSingleItemByIdDocument,
} from "@/gql/graphql";

export const getAllProductsLength = async () => {
	const grapqlRespone = await executeGraphql(ProductsGetListDocument, {});
	return grapqlRespone.products.data.length;
};

export const getProductsLengthByCategory = async (slug: string) => {
	const grapqlResponse = await executeGraphql(ProductGetListByCategoryDocument, {
		slug: slug,
	});
	if (!grapqlResponse.category?.products) return 0;

	return grapqlResponse.category.products.length;
};

export const getProductLists = async (productsNumber: number, productsSkip: number) => {
	const grapqlRespone = await executeGraphql(ProductsGetListDocument, {
		productsNumber: productsNumber,
		productsSkip: productsSkip,
	});
	return grapqlRespone.products.data;
};

export const getProductsCategoryList = async () => {
	const grapqlResponse = await executeGraphql(ProductGetCategoriesDocument, {});
	if (!grapqlResponse.categories?.data) return [];

	return grapqlResponse.categories.data;
};

export const getProductsListByCategory = async (slug: string) => {
	const grapqlResponse = await executeGraphql(ProductGetListByCategoryDocument, {
		slug: slug,
	});
	if (!grapqlResponse.category?.products) return [];

	return grapqlResponse.category.products;
};

export const getProductItemById = async (id: string) => {
	const grapqlResponse = await executeGraphql(ProductsGetSingleItemByIdDocument, { id });
	if (!grapqlResponse.product) return null;

	return grapqlResponse.product;
};
