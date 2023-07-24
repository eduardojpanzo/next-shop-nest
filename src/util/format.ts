export const { format: formatPrice } = new Intl.NumberFormat('pt-br', {
	currencySign: "standard",
	style: "currency",
	currency: "AOA"
});
