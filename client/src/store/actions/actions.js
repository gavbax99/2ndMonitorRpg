export const UPDATE_ALL_TOKENS = "UPDATE_ALL_TOKENS";
export const UPDATE_ALL_CURRENCIES = "UPDATE_ALL_CURRENCIES";
export const UPDATE_ALL_MATERIALS = "UPDATE_ALL_MATERIALS";
export const UPDATE_ALL_ITEMS = "UPDATE_ALL_ITEMS";
export const UPDATE_ALL_STATS = "UPDATE_ALL_STATS";
export const UPDATE_HERO_QUEST = "UPDATE_HERO_QUEST";
export const NAVIGATE = "NAVIGATE";

export const updateAllTokens = (tokens) => {
	return {
		type: UPDATE_ALL_TOKENS,
		tokens: tokens
	}
}

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

export const updateAllItems = (items) => {
	return {
		type: UPDATE_ALL_ITEMS,
		items: items
	};
};

export const updateAllStats = (stats) => {
	return {
		type: UPDATE_ALL_STATS,
		stats: stats
	};
};

export const updateHeroQuest = (quest) => {
	return {
		type: UPDATE_HERO_QUEST,
		quest: quest
	};
}

export const navigate = (page) => {
	return {
		type: NAVIGATE,
		page: page
	};
};