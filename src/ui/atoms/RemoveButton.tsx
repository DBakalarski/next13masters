"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { removeItem } from "@/app/cart/action";

export const RemoveButton = ({ productId, cartId }: { productId: string; cartId: string }) => {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();
	return (
		<button
			disabled={isPending}
			onClick={() =>
				startTransition(async () => {
					await removeItem(productId, cartId);
					router.refresh();
				})
			}
			className="font-medium text-red-600 hover:underline disabled:cursor-wait disabled:text-gray-400 dark:text-red-500"
		>
			Remove
		</button>
	);
};
