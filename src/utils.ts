export const formatMoney = (amount: number) => {
	return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount);
};

export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
