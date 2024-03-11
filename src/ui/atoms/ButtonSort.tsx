"use client";

import { useFormStatus } from "react-dom";

export const ButtonSort = ({ name, testid }: { name: string; testid: string }) => {
	const stautus = useFormStatus();
	return (
		<button
			data-testid={testid}
			type="submit"
			disabled={stautus.pending}
			className="mt-4 w-auto rounded-md border bg-slate-700 px-8 py-3 text-white disabled:cursor-wait disabled:bg-slate-400"
		>
			SORT BY {name}
		</button>
	);
};
