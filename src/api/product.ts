import { type ProductItemType, type ProductResponseItemType } from "@/types/productTypes";

export const getAllProductsLength = async () => {
	const res = await fetch(`https://naszsklep-api.vercel.app/api/products`);
	const responseProducts = (await res.json()) as ProductResponseItemType[];
	const products: ProductItemType[] = responseProducts.map(productResponseItemToProductItem);
	return products.length;
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
