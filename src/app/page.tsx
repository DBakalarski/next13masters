import { ProductList } from "@/ui/organisms/ProductList";
import { type ProductItemType } from "@/ui/types";

const products: ProductItemType[] = [
	{
		id: "1",
		category: "Accessories",
		name: "Wayfarer Classic",
		price: 5000,
		coverImage: {
			alt: "Wayfarer Classic",
			src: "./product1.jpeg",
		},
	},
	{
		id: "2",
		category: "Accessories",
		name: "Example",
		price: 10000,
		coverImage: {
			alt: "Example",
			src: "./product2.jpeg",
		},
	},
	{
		id: "3",
		category: "Accessories",
		name: "Example2",
		price: 15000,
		coverImage: {
			alt: "Example",
			src: "./product3.jpeg",
		},
	},
	{
		id: "4",
		category: "Accessories",
		name: "Example3",
		price: 20000,
		coverImage: {
			alt: "Example",
			src: "./product4.jpeg",
		},
	},
];

export default function Home() {
	return <ProductList products={products} />;
}
