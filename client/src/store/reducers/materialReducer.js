const initState = {
	materialObj: {},
};

const materialReducer = (state = initState, action) => {
	switch (action.type) {
		
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

export default materialReducer;