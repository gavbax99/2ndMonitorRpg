const initState = {
	Bronze: 0,
	Silver: 0,
	Gold: 0,
	Mythril: 0,
};

const currencyReducer = (state = initState, action) => {
	switch (action.type) {
		
		// update the page
		case "ADD_SINGLE_CURRENCY":
			return Object.assign({}, state, {
				[action.currency]: state[action.currency] + action.qty,
			});

		// first return the initState
		default:
			return initState;
	};
};

export default currencyReducer;