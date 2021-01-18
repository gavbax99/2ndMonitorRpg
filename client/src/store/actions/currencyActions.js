export const ADD_SINGLE_CURRENCY = "ADD_SINGLE_CURRENCY";


export const addSinglecurrency = (currency, qty) => {
	return {
		type: ADD_SINGLE_CURRENCY,
		currency: currency,
		qty: qty,
	};
};


