export default function SingleProduct({ params }: { params: { productId: string } }) {
	return (
		<>
			<h1 className="text-4xl font-bold">SingleProduct</h1>
			<p className="text-xl">{params.productId} </p>
		</>
	);
}
