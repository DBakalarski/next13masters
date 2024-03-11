"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { type ChangeEvent, useState, useEffect } from "react";

export const SelectSortBy = () => {
	const [value, setValue] = useState("DEFAULT");
	const router = useRouter();
	const searchParams = useSearchParams();

	useEffect(() => {
		const param = searchParams.get("sortBy");
		if (!param) {
			setValue("DEFAULT");
		} else {
			console.log(param);
			setValue(param);
		}
	}, [searchParams]);

	const handleChangeValue = (e: ChangeEvent<HTMLSelectElement>) => {
		console.log("handleChangeValue");
		setValue(e.target.value);
		router.replace(`/products/1?sortBy=${e.target.value}`);
	};
	return (
		<div>
			<label
				htmlFor="sortby"
				className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
			>
				Select an option
			</label>
			<select
				onChange={handleChangeValue}
				value={value}
				id="sortby"
				className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
			>
				<option value="DEFAULT">Sort by</option>
				<option data-testid="sort-by-price" value="PRICE">
					PRICE
				</option>
				<option data-testid="sort-by-rating" value="RATING">
					RATING
				</option>
			</select>
		</div>
	);
};
