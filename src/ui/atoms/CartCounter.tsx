import { ShoppingCart } from "lucide-react";

export const CartCounter = () => {
	return (
		<div className="flex items-center justify-center">
			<ShoppingCart />
			<span className="pl-1">0</span>
		</div>
	);
};
