import Link from "next/link";
import { type ProductCollectionFragment } from "@/gql/graphql";

export const CollectionsListItem = ({ collection }: { collection: ProductCollectionFragment }) => {
	return (
		<li>
			<Link
				className="flex items-center justify-center border-2 border-gray-600 py-8 hover:border-blue-600"
				href={`/collections/${collection.slug}`}
			>
				<article>
					<div className="">{collection.name}</div>
				</article>
			</Link>
		</li>
	);
};
