type CurrencyProps = {
	price: string;
};

const Currency = ({ price }: CurrencyProps) => {
	const getPrice = Number.parseFloat(price).toFixed(2).replace(".", ",");

	return <>{getPrice} zł</>;
};

export default Currency;
