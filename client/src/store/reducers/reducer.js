const initState = {
	Bronze: 0,
	Silver: 0,
	Gold: 0,
	Mythril: 0,
	currencyObj: {},
	materialObj: {},
	heroQuestObj: [],
	otherQuestObj: [],
	page: "Loading",
};

const reducer = (state = initState, action) => {
	switch (action.type) {
		
		// Add single currency
		case "ADD_SINGLE_CURRENCY":
			return Object.assign({}, state, {
				[action.currency]: state[action.currency] + action.qty,
			});

		// update the page
		case "UPDATE_ALL_CURRENCIES":
			return Object.assign({}, state, {
				currencyObj: action.currencies
			});

		// update the page
		case "UPDATE_ALL_MATERIALS":
			return Object.assign({}, state, {
				materialObj: action.materials
			});

		// update the page
		case "UPDATE_HERO_QUEST":
			return Object.assign({}, state, {
				heroQuestObj: action.quest
			});

		// update the page
		case "NAVIGATE":
			return Object.assign({}, state, {
				page: action.page,
			});


		// first return the initState
		default:
			return initState;
	};
};

export default reducer;