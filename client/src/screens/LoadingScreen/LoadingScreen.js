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
			]).then(axios.spread((...res) => {
				dispatch(updateAllCurrencies(res[0].data.filter(ele => ele.curr === 1)));
				dispatch(updateAllMaterials(res[0].data.filter(ele => ele.curr === 0)));
				console.log("quest", res[1].data.filter(ele => ele.isHeroQuest === 1));
				dispatch(updateHeroQuest(res[1].data.filter(ele => ele.isHeroQuest === 1)));
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