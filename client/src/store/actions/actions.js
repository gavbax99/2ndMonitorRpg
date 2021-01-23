export const ADD_SINGLE_CURRENCY = "ADD_SINGLE_CURRENCY";
export const UPDATE_ALL_CURRENCIES = "UPDATE_ALL_CURRENCIES";
export const UPDATE_ALL_MATERIALS = "UPDATE_ALL_MATERIALS";
export const NAVIGATE = "NAVIGATE";

export const addSinglecurrency = (currency, qty) => {
	return {
		type: ADD_SINGLE_CURRENCY,
		currency: currency,
		qty: qty,
	};
};

export const updateAllCurrencies = (currencies) => {
	return {
		type: UPDATE_ALL_CURRENCIES,
		currencies: currencies
	}
}

export const updateAllMaterials = (materials) => {
	return {
		type: UPDATE_ALL_MATERIALS,
		materials: materials
	};
};

export const navigate = (page) => {
	return {
		type: NAVIGATE,
		page: page
	};
};