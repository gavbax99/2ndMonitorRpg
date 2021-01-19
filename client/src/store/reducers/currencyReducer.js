const initState = {
	Bronze: 0,
	Silver: 0,
	Gold: 0,
	Mythril: 0,
	materialObj: {},
};

const currencyReducer = (state = initState, action) => {
	switch (action.type) {
		
		// Add single currency
		case "ADD_SINGLE_CURRENCY":
			return Object.assign({}, state, {
				[action.currency]: state[action.currency] + action.qty,
			});

		// update the page
		case "UPDATE_ALL_MATERIALS":
			return Object.assign({}, state, {
				materialObj: action.materials
			});

		// first return the initState
		default:
			return initState;
	};
};

export default currencyReducer;