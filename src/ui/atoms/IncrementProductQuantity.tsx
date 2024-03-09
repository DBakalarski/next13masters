"use client";

import { useOptimistic } from "react";
import { changeItemQuantity } from "../../app/cart/action";

export const IncrementProductQuantity = ({
	quantity,
	itemId,
	cartId,
}: {
	quantity: number;
	itemId: string;
	cartId: string;
}) => {
	const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(quantity);
	return (
		<form className="flex items-center">
			<button
				className="me-3 inline-flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 bg-white p-1 text-sm font-medium text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
				type="submit"
				formAction={async () => {
					setOptimisticQuantity(optimisticQuantity - 1);
					await changeItemQuantity(itemId, optimisticQuantity - 1, cartId);
				}}
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
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M1 1h16"
					/>
				</svg>
			</button>
			<div className="flex w-5 justify-center">
				<span> {optimisticQuantity}</span>
			</div>
			<button
				className="ms-3 inline-flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 bg-white p-1 text-sm font-medium text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
				type="submit"
				formAction={async () => {
					setOptimisticQuantity(optimisticQuantity + 1);
					await changeItemQuantity(itemId, optimisticQuantity + 1, cartId);
				}}
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
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M9 1v16M1 9h16"
					/>
				</svg>
			</button>
		</form>
	);
};
