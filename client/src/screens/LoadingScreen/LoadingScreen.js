// React and CSS
import React, { useEffect } from 'react';
import axios from "axios";
import './LoadingScreen.css';

// Redux
import { useDispatch } from 'react-redux';
import { 
	navigate,
	updateAllCurrencies,
	updateAllMaterials,
	updateHeroQuest
 } from '../../store/actions/actions';

const LoadingScreen = props => {

	// Redux
	const dispatch = useDispatch();

	useEffect(() => {
		const async = async () => {
			axios.all([
				axios.get("/api/getMaterials/1"),
				axios.get("/api/getQuests/1")
			]).then(axios.spread((matRes, questRes) => {
				// Currencies
				let currencyObj = {};
				matRes.data.filter(mat => mat.curr === 1).forEach(mat => {
					currencyObj = {...currencyObj, [mat.mat]: {...mat}};
				});
				dispatch(updateAllCurrencies(currencyObj));

				// Currencies
				let materialObj = {};
				matRes.data.filter(mat => mat.curr === 0).forEach(mat => {
					materialObj = {...materialObj, [mat.mat]: {...mat}};
				});
				dispatch(updateAllMaterials(materialObj));

				// dispatch(updateAllCurrencies(matRes.data.filter(ele => ele.curr === 1)));
				// dispatch(updateAllMaterials(matRes.data.filter(ele => ele.curr === 0)));

				console.log("quest", questRes.data.filter(ele => ele.isHeroQuest === 1));
				dispatch(updateHeroQuest(questRes.data.filter(ele => ele.isHeroQuest === 1)));
				
				dispatch(navigate("Home"));
			})).catch(error => {
				console.log("Error in LoadingScreen:", error);
			});
		};

		async();
	}, []);

	// COMP
	return <div className='loadingScreen'></div>
};

export default LoadingScreen;