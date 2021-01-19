import { combineReducers } from "redux";

import navigationReducer from "./navigationReducer";
import currencyReducer from "./currencyReducer";
import materialReducer from "./materialReducer";

export default combineReducers({
	navigationReducer: navigationReducer,
	currencyReducer: currencyReducer,
	materialReducer: materialReducer,
});