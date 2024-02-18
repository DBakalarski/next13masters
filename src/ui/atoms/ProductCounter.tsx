import { useState } from "react";

export const ProductCounter = () => {
	const [count, setCount] = useState(0);
	return (
		<div>
			<button
				className="border border-slate-200 px-4"
				onClick={() => setCount((counter) => counter - 1)}
			>
				-
			</button>
			<input className="border border-slate-500" readOnly value={count} />
			<button
				className="border border-slate-200 px-4"
				onClick={() => setCount((counter) => counter + 1)}
			>
				+
			</button>
		</div>
	);
};
