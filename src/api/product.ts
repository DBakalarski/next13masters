import { ProductsGetListDocument, type TypedDocumentString } from "@/gql/graphql";
import { type ProductItemType, type ProductResponseItemType } from "@/types/productTypes";

export const executeGraphql = async <TResult, TVariables>(
	query: TypedDocumentString<TResult, TVariables>,
	variables: TVariables,
): Promise<TResult> => {
	if (!process.env.GRAPHQL_URL) {
		throw TypeError("GRAPHQL_URL is not defined");
	}

	const res = await fetch(process.env.GRAPHQL_URL, {
		method: "POST",
		body: JSON.stringify({
			query,
			variables,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	});

	type GraphQLResponse<T> =
		| { data?: undefined; errors: { message: string }[] }
		| { data: T; errors?: undefined };

	const graphqlResponse = (await res.json()) as GraphQLResponse<TResult>;

	if (graphqlResponse.errors) {
		throw TypeError(`GraphQL Error`, {
			cause: graphqlResponse.errors,
		});
	}

	return graphqlResponse.data;
};

export const getAllProductsLength = async () => {
	const res = await fetch(`https://naszsklep-api.vercel.app/api/products`);
	const responseProducts = (await res.json()) as ProductResponseItemType[];
	const products: ProductItemType[] = responseProducts.map(productResponseItemToProductItem);
	return products.length;
};

export const getProductLists = async (): Promise<ProductItemType[]> => {
	const grapqlRespone = await executeGraphql(ProductsGetListDocument, {});
	return grapqlRespone.products.map((p) => {
		return {
			id: p.id,
			category: "",
			name: p.name,
			price: p.price,
			description: p.description,
			coverImage: {
				alt: p.name,
				src: p.images[0]?.url || "",
			},
		};
	});
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

export const getProductResponseItemTypeById = async (id: string) => {
	const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);
	const responseProduct = (await res.json()) as ProductResponseItemType;
	const product: ProductItemType = productResponseItemToProductItem(responseProduct);
	return product;
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
