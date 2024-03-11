"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { addReview } from "@/app/product/[productId]/actions";

const defaultFormValues = {
	title: "",
	author: "",
	email: "",
	description: "",
	rating: 4,
};

export const ReviewForm = ({ productId }: { productId: string }) => {
	const [formValues, setFormValues] = useState(defaultFormValues);
	const router = useRouter();

	const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormValues({
			...formValues,
			[e.target.id]: e.target.value,
		});
	};

	return (
		<form data-testid="add-review-form" className="flex w-1/2 flex-col space-y-4">
			<h3 className="text-lg font-semibold">Write a Review</h3>
			<div className="flex flex-col space-y-4">
				<div className="flex flex-col space-y-2">
					<label htmlFor="headline" className="text-sm font-medium">
						Title
					</label>
					<input
						type="text"
						id="title"
						name="headline"
						className="rounded-md border border-gray-300 p-3"
						value={formValues.title}
						onChange={handleChangeValue}
					/>
				</div>
				<div className="flex flex-col space-y-2">
					<label htmlFor="author" className="text-sm font-medium">
						Author
					</label>
					<input
						type="text"
						id="author"
						name="name"
						className="rounded-md border border-gray-300 p-3"
						value={formValues.author}
						onChange={handleChangeValue}
					/>
				</div>
				<div className="flex flex-col space-y-2">
					<label htmlFor="email" className="text-sm font-medium">
						Email
					</label>
					<input
						type="email"
						id="email"
						name="email"
						className="rounded-md border border-gray-300 p-3"
						value={formValues.email}
						onChange={handleChangeValue}
					/>
				</div>
				<div className="flex flex-col space-y-2">
					<label htmlFor="rating" className="text-sm font-medium">
						Rate
					</label>
					<input
						type="number"
						id="rating"
						name="rating"
						className="rounded-md border border-gray-300 p-3"
						value={formValues.rating}
						onChange={handleChangeValue}
					/>
				</div>
				<div className="flex flex-col space-y-2">
					<label htmlFor="review" className="text-sm font-medium">
						Review
					</label>
					<textarea
						id="description"
						name="content"
						className="rounded-md border border-gray-300 p-3"
						value={formValues.description}
						onChange={handleChangeValue}
					/>
				</div>

				<button
					formAction={async () => {
						await addReview({ ...formValues, productId });
						setFormValues(defaultFormValues);
						router.refresh();
					}}
					type="submit"
					className="rounded-md bg-gray-800 p-3 text-white"
				>
					Submit
				</button>
			</div>
		</form>
	);
};
