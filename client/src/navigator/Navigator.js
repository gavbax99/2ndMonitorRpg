// React and CSS
import React, { useEffect } from 'react';
import axios from "axios";
import './Navigator.css';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { navigate } from '../store/actions/navigationActions';
import { addSinglecurrency, updateAllMaterials } from '../store/actions/currencyActions';

// Screens
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import AboutScreen from "../screens/AboutScreen/AboutScreen";

const Navigator = props => {

	// Redux
	const dispatch = useDispatch();
	const currentPage = useSelector(state => state.navigationReducer.page);

	useEffect(() => {
		axios.all([
			axios.get("/api/getMaterials/1"),
			axios.get("/api/getCurrencies/1")
		])
		.then(axios.spread((resMat, resCurr) => {
			// Updates materials array
			dispatch(updateAllMaterials(resMat.data));

			// Updates currencies
			resCurr.data.forEach(currency => {
				dispatch(addSinglecurrency(currency.mat, currency.qty));
			});
		}));
	}, [useEffect]);

	// const RenderPage = () => {
	// 	if      (currentPage === "Home")  return <HomeScreen />
	// 	else if (currentPage === "About") return <AboutScreen />
	// 	else return <h1>Page not found</h1>
	// };

	return (
		<div className={`flex-full flex-row w100`}>
			{/* <RenderPage /> */}
			<HomeScreen />
		</div>
	);
};

export default Navigator;