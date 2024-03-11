import { executeGraphql } from "./apiGraphql";
import {
	ProductGetCategoriesDocument,
	ProductGetCollectionsDocument,
	ProductGetListByCategoryDocument,
	ProductGetListByCollectionDocument,
	ProductGetReviewsDocument,
	type ProductSortBy,
	ProductsGetListBySearchDocument,
	ProductsGetListDocument,
	ProductsGetSingleItemByIdDocument,
} from "@/gql/graphql";

export const getAllProductsLength = async () => {
	const grapqlRespone = await executeGraphql({ query: ProductsGetListDocument, variables: {} });
	return grapqlRespone.products.data.length;
};

export const getProductsLengthByCategory = async (slug: string) => {
	const grapqlResponse = await executeGraphql({
		query: ProductGetListByCategoryDocument,
		variables: {
			slug: slug,
		},
	});
	if (!grapqlResponse.category?.products) return 0;

	return grapqlResponse.category.products.length;
};

export const getProductLists = async (
	productsNumber: number,
	productsSkip: number,
	orderBy: ProductSortBy = "PRICE",
) => {
	const grapqlRespone = await executeGraphql({
		query: ProductsGetListDocument,
		variables: {
			productsNumber: productsNumber,
			productsSkip: productsSkip,
			orderBy: orderBy,
		},
	});
	return grapqlRespone.products.data;
};

export const getProductsCategoryList = async () => {
	const grapqlResponse = await executeGraphql({
		query: ProductGetCategoriesDocument,
	});
	if (!grapqlResponse.categories?.data) return [];

	return grapqlResponse.categories.data;
};

export const getProductsListByCategory = async (slug: string) => {
	const grapqlResponse = await executeGraphql({
		query: ProductGetListByCategoryDocument,
		variables: {
			slug: slug,
		},
	});
	if (!grapqlResponse.category?.products) return [];

	return grapqlResponse.category.products;
};

export const getProductsListByCollections = async (slug: string) => {
	const grapqlResponse = await executeGraphql({
		query: ProductGetListByCollectionDocument,
		variables: {
			slug: slug,
		},
	});
	if (!grapqlResponse.collection?.products) return [];

	return grapqlResponse.collection.products;
};

export const getProductsListBySearch = async (search: string) => {
	const grapqlResponse = await executeGraphql({
		query: ProductsGetListBySearchDocument,
		variables: {
			search: search,
		},
	});
	if (!grapqlResponse.products?.data) return [];

	return grapqlResponse.products.data;
};

export const getProductItemById = async (id: string) => {
	const grapqlResponse = await executeGraphql({
		query: ProductsGetSingleItemByIdDocument,
		variables: { id },
	});
	if (!grapqlResponse.product) return null;

	return grapqlResponse.product;
};

export const getCollectionsData = async () => {
	const grapqlResponse = await executeGraphql({
		query: ProductGetCollectionsDocument,
	});
	if (!grapqlResponse.collections?.data) return [];

	return grapqlResponse.collections.data;
};

export const getReviewsByProductId = async (productId: string) => {
	const grapqlResponse = await executeGraphql({
		query: ProductGetReviewsDocument,
		variables: { id: productId },
	});
	if (!grapqlResponse.product) return null;

	return grapqlResponse.product;
};
