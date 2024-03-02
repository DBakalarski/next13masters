// import { redirect } from "next/navigation";
import { getProductsListBySearch } from "@/api/product";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function SearchPge({ searchParams }: { searchParams: { query: string } }) {
	// if (!searchParams.query) {
	// 	redirect("/");
	// }

	const products = await getProductsListBySearch(searchParams.query);

	return (
		<>
			<ProductList products={products} />
		</>
	);
}
