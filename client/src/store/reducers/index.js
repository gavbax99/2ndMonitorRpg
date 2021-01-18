import { combineReducers } from "redux";

import navigationReducer from "./navigationReducer";
import currencyReducer from "./currencyReducer";

export default combineReducers({
	navigationReducer: navigationReducer,
	currencyReducer: currencyReducer,
});