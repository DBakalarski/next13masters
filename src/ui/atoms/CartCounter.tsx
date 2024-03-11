import { ShoppingCart } from "lucide-react";
import { cookies } from "next/headers";
import { getCartById } from "@/api/cart";

export const CartCounter = async () => {
	const cartId = cookies().get("cartId")?.value;
	if (!cartId) {
		return (
			<div className="flex items-center justify-center">
				<ShoppingCart />
				<span className="pl-1">0</span>
			</div>
		);
	}
	const cart = await getCartById(cartId);
	const cartItemsLength = cart.cart?.items.length;
	return (
		<div className="flex items-center justify-center">
			<ShoppingCart />
			<span className="pl-1">{cartItemsLength}</span>
		</div>
	);
};
