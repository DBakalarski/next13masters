import { type ProductItemType, type ProductResponseItemType } from "@/types/productTypes";

export const geProductResponseItemTypesList = async () => {
	const res = await fetch("https://naszsklep-api.vercel.app/api/products");
	const responseProducts = (await res.json()) as ProductResponseItemType[];
	const products: ProductItemType[] = responseProducts.map(productResponseItemToProductItem);
	return products;
};

export const geProductResponseItemTypeById = async (id: string) => {
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
	coverImage: {
		alt: product.title,
		src: product.image,
	},
});
