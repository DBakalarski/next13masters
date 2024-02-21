import { notFound } from "next/navigation";
import { type ComponentType } from "react";

export default async function StaticPage({ params }: { params: { filename: string } }) {
	const Content = await import(`./${params.filename}.mdx`).then(
		(mod: { default: ComponentType }) => mod.default,
		() => notFound(),
	);
	return (
		<article className="prose prose-lg">
			<Content />
		</article>
	);
}
