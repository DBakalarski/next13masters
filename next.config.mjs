import remarkGfm from "remark-gfm";
import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
	// Configure `pageExtensions`` to include MDX files
	pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
	typedRoutes: true,
	experimental: {
		mdxRs: true,
	},
	images: {
		domains: ["media.graphassets.com", "static-ourstore.hyperfunctor.com"],
	},
	async redirects() {
		return [
			{
				source: "/products",
				destination: "/products/1",
				permanent: true,
			},
			{
				source: "/product",
				destination: "/products",
				permanent: true,
			},
			{
				source: "/categories/:slug",
				destination: "/categories/:slug/1",
				permanent: true,
			},
			{
				source: "/collection",
				destination: "/",
				permanent: true,
			},
		];
	},
};

const withMDX = createMDX({
	// Add markdown plugins here, as desired
	options: {
		remarkPlugins: [remarkGfm],
		rehypePlugins: [],
	},
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
