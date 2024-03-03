"use client";

import { useFormStatus } from "react-dom";

export const AddToCartButton = () => {
	const stautus = useFormStatus();
	return (
		<button
			type="submit"
			disabled={stautus.pending}
			className="mt-4 w-auto rounded-md border bg-slate-700 px-8 py-3 text-white disabled:cursor-wait disabled:bg-slate-400"
		>
			Add to cart
		</button>
	);
};
