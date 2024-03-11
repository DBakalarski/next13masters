import { ImageResponse } from "next/og";

import { getProductItemById } from "@/api/product";

export const runtime = "edge";

export const alt = "next13 masters sklep";
export const size = {
	width: 1200,
	height: 630,
};

export const contentType = "image/png";

export default async function og({ params }: { params: { productId: string } }) {
	const product = await getProductItemById(params.productId);
	return new ImageResponse(
		(
			<div
				tw="w-full text-white h-full flex flex-col items-center justify-center text-xl"
				style={{
					background: `
				    linear-gradient(
				      90deg,
				      rgb(6,172,214) 0%,
				      rgb(0,0,0) 20%,
				      rgb(0,0,0) 80%,
				      rgb(6,71,255) 100%
				    )`,
				}}
			>
				{product?.images[0] && <img tw="w-40 h-40" src={product.images[0].url} />}

				<p tw="font-sans uppercase m-0 p-0 text-[40px] leading-4">{product?.name}</p>
				<p tw="font-serif m-0 p-0 font-black">{product?.categories[0]?.name}</p>
				<p tw="m-0 mt-2">{product?.description}</p>
			</div>
		),
	);
}
