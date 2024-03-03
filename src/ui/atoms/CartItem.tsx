import NextImage from "next/image";
import { type CartItemProductFragment } from "@/gql/graphql";
import { formatMoney } from "@/utils";

export const CartItem = ({ cartItem }: { cartItem: CartItemProductFragment }) => {
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
				<div className="flex items-center">
					<button
						className="me-3 inline-flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 bg-white p-1 text-sm font-medium text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
						type="button"
					>
						<span className="sr-only">Quantity button</span>
						<svg
							className="h-3 w-3"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 18 2"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M1 1h16"
							/>
						</svg>
					</button>
					<div>
						<input
							type="number"
							id="first_product"
							className="block w-14 rounded-lg border border-gray-300 bg-gray-50 px-2.5 py-1 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
							placeholder="1"
							required
							value={cartItem.quantity}
						/>
					</div>
					<button
						className="ms-3 inline-flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 bg-white p-1 text-sm font-medium text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
						type="button"
					>
						<span className="sr-only">Quantity button</span>
						<svg
							className="h-3 w-3"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 18 18"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 1v16M1 9h16"
							/>
						</svg>
					</button>
				</div>
			</td>
			<td className="px-6 py-2 font-semibold text-gray-900 dark:text-white">
				{formatMoney(cartItem.product.price / 100)}
			</td>
			<td className="px-6 py-2">
				<a href="#" className="font-medium text-red-600 hover:underline dark:text-red-500">
					Remove
				</a>
			</td>
		</tr>
	);
};
