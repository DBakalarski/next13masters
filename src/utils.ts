export const formatMoney = (amount: number) => {
	return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount);
};

export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const getRandomElements = (arr: unknown[], count: number) => {
	const result = new Set();
	while (result.size < count) {
		const index = Math.floor(Math.random() * arr.length);
		result.add(arr[index]);
	}
	return Array.from(result);
};
