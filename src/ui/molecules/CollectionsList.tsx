import { getCollectionsData } from "@/api/product";
import { CollectionsListItem } from "@/ui/atoms/CollectionsListItem";

export const CollectionsList = async () => {
	const collections = await getCollectionsData();
	return (
		<ul
			data-testid="collections-list"
			className="my-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
		>
			{collections.map((collection) => (
				<CollectionsListItem key={collection.id} collection={collection} />
			))}
		</ul>
	);
};
