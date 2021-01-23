import { combineReducers } from "redux";

import reducer from "./reducer";
// import navigationReducer from "./navigationReducer";
// import materialReducer from "./materialReducer";

export default combineReducers({
	reducer: reducer,
	// navigationReducer: navigationReducer,
	// materialReducer: materialReducer,
});