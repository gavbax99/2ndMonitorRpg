const initState = {
	tokenObj: {},
	currencyObj: {},
	materialObj: {},

	heroQuestObj: [],
	// otherQuestObj: {},

	itemsObj: {},
	statsObj: {},


	page: "Loading",
};

const reducer = (state = initState, action) => {
	switch (action.type) {

		// update the page
		case "UPDATE_ALL_TOKENS":
			return Object.assign({}, state, {
				tokenObj: action.tokens
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
		case "UPDATE_ALL_ITEMS":
			return Object.assign({}, state, {
				itemsObj: action.items
			});

		// update the page
		case "UPDATE_ALL_STATS":
			return Object.assign({}, state, {
				statsObj: action.stats
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