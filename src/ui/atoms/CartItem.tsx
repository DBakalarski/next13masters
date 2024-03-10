import NextImage from "next/image";
import { RemoveButton } from "./RemoveButton";
import { type CartItemProductFragment } from "@/gql/graphql";
import { formatMoney } from "@/utils";
import { IncrementProductQuantity } from "@/ui/atoms/IncrementProductQuantity";

export const CartItem = ({
	cartItem,
	cartId,
}: {
	cartItem: CartItemProductFragment;
	cartId: string;
}) => {
	return (
		<tr
			key={cartItem.product.id}
			className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
		>
			<td className="p-2">
				{cartItem.product.images[0] && (
					<NextImage
						width={320}
						height={320}
						src={cartItem.product.images[0].url}
						alt={cartItem.product.name}
						className="max-h-full w-16 max-w-full md:w-32"
					/>
				)}
			</td>
			<td className="px-6 py-2 font-semibold text-gray-900 dark:text-white">
				{cartItem.product.name}
			</td>
			<td className="px-6 py-2">
				<IncrementProductQuantity
					quantity={cartItem.quantity}
					cartId={cartId}
					itemId={cartItem.product.id}
				/>
			</td>
			<td className="px-6 py-2 font-semibold text-gray-900 dark:text-white">
				{formatMoney(cartItem.product.price / 100)}
			</td>
			<td className="px-6 py-2">
				<RemoveButton productId={cartItem.product.id} cartId={cartId} />
			</td>
		</tr>
	);
};
