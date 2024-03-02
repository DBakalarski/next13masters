import { executeGraphql } from "./apiGraphql";
import {
	ProductGetCategoriesDocument,
	ProductGetCollectionsDocument,
	ProductGetListByCategoryDocument,
	ProductGetListByCollectionDocument,
	ProductsGetListBySearchDocument,
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

export const getProductsListByCollections = async (slug: string) => {
	const grapqlResponse = await executeGraphql(ProductGetListByCollectionDocument, {
		slug: slug,
	});
	if (!grapqlResponse.collection?.products) return [];

	return grapqlResponse.collection.products;
};

export const getProductsListBySearch = async (search: string) => {
	const grapqlResponse = await executeGraphql(ProductsGetListBySearchDocument, {
		search: search,
	});
	if (!grapqlResponse.products?.data) return [];

	return grapqlResponse.products.data;
};

export const getProductItemById = async (id: string) => {
	const grapqlResponse = await executeGraphql(ProductsGetSingleItemByIdDocument, { id });
	if (!grapqlResponse.product) return null;

	return grapqlResponse.product;
};

export const getCollectionsData = async () => {
	const grapqlResponse = await executeGraphql(ProductGetCollectionsDocument, {});
	if (!grapqlResponse.collections?.data) return [];

	return grapqlResponse.collections.data;
};
