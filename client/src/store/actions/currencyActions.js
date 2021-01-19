export const ADD_SINGLE_CURRENCY = "ADD_SINGLE_CURRENCY";
export const UPDATE_ALL_MATERIALS = "UPDATE_ALL_MATERIALS";

export const addSinglecurrency = (currency, qty) => {
	return {
		type: ADD_SINGLE_CURRENCY,
		currency: currency,
		qty: qty,
	};
};

export const updateAllMaterials = (materials) => {
	return {
		type: UPDATE_ALL_MATERIALS,
		materials: materials
	};
};