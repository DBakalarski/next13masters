import { getReviewsByProductId } from "@/api/product";
import { RatingStars } from "@/ui/atoms/RatingStars";

export const ReviewsContainer = async ({ productId }: { productId: string }) => {
	const reviewsData = await getReviewsByProductId(productId);
	if (!reviewsData) return null;

	const reviews = reviewsData.reviews.slice(-3);

	return (
		<div className="mt-5 flex flex-col ">
			<h2 className="text-3xl font-semibold text-gray-900 dark:text-white">Reviews</h2>
			{reviews.map((review) => (
				<figure className="my-5 max-w-screen-md" key={review.id}>
					<h3 className="text-xl font-semibold text-gray-900 dark:text-white">{review.title}</h3>
					<div className="mb-4 flex items-center text-yellow-300">
						<RatingStars rating={review.rating} />
					</div>
					<blockquote>
						<p className="text-2xl font-semibold text-gray-900 dark:text-white">
							{review.description}
						</p>
					</blockquote>
					<figcaption className="mt-3 flex items-center space-x-3 rtl:space-x-reverse">
						<div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700 rtl:divide-x-reverse">
							<cite className="pe-3 font-medium text-gray-900 dark:text-white">
								{review.author}
							</cite>
							<cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">{review.email}</cite>
						</div>
					</figcaption>
				</figure>
			))}
		</div>
	);
};
