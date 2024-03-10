import { type ProductReviewFragment } from "@/gql/graphql";

export const SingleReview = ({ review }: { review: ProductReviewFragment }) => {
	return (
		<div className="flex flex-col space-y-2">
			<div className="flex items-center space-x-2">
				<span className="text-lg font-semibold">{review.title}</span>
				<span className="text-sm text-gray-500">{review.author}</span>
			</div>
			<p className="text-gray-700">{review.email}</p>
		</div>
	);
};
