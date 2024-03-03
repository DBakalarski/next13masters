import { cookies } from "next/headers";
import { getCartById } from "@/api/cart";
import { CartSummary } from "@/ui/molecules/CartSummary";

export default async function CartPage() {
	const cartId = cookies().get("cartId")?.value;
	if (!cartId) {
		return <div>Cart is empty</div>;
	}
	const cart = await getCartById(cartId);
	const cartItems = cart.cart?.items;
	if (!cartItems || cartItems.length === 0) {
		return <div>Cart is empty</div>;
	}
	return (
		<>
			<CartSummary cartItems={cartItems} />
		</>
	);
}
