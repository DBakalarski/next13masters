import { CartItem } from "@/ui/atoms/CartItem";
import { type CartItemProductFragment } from "@/gql/graphql";

export const CartSummary = ({
	cartItems,
	cartId,
}: {
	cartItems: CartItemProductFragment[];
	cartId: string;
}) => {
	return (
		console.log("cartId CartSummary", cartId),
		(
			<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
				<table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
					<thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
						<tr>
							<th scope="col" className="px-16 py-3">
								<span className="sr-only">Image</span>
							</th>
							<th scope="col" className="px-6 py-3">
								Product
							</th>
							<th scope="col" className="px-6 py-3">
								Qty
							</th>
							<th scope="col" className="px-6 py-3">
								Price
							</th>
							<th scope="col" className="px-6 py-3">
								Action
							</th>
						</tr>
					</thead>
					<tbody>
						{cartItems.map((item) => (
							<CartItem key={item.product.id} cartItem={item} cartId={cartId} />
						))}
					</tbody>
				</table>
			</div>
		)
	);
};
