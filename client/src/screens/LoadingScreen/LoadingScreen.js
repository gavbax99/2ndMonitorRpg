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
	updateHeroQuest,
	updateAllItems,
	updateAllStats,
	updateAllTokens,
 } from '../../store/actions/actions';

 // Constants
 import Tokens from "../../constants/Tokens";

const LoadingScreen = props => {

	// Redux
	const dispatch = useDispatch();

	useEffect(() => {
		const async = async () => {
			axios.all([
				axios.get("/api/getMaterials/1"),
				axios.get("/api/getQuests/1"),
				axios.get("/api/getItems/1"),
				axios.get("/api/getTokens/1"),
			]).then(axios.spread((materialsRes, questsRes, itemsRes, tokensRes) => {
				// Currencies
				let currencyObj = {};
				materialsRes.data.filter(mat => mat.curr === 1).forEach(mat => {
					currencyObj = {...currencyObj, [mat.mat]: {...mat}};
				});
				dispatch(updateAllCurrencies(currencyObj));

				// Materials
				let materialObj = {};
				materialsRes.data.filter(mat => mat.curr === 0).forEach(mat => {
					materialObj = {...materialObj, [mat.mat]: {...mat}};
				});
				dispatch(updateAllMaterials(materialObj));

				// Items
				let itemObj = {};
				let speed = 0;
				let power = 0;
				let luck = 0;
				let wisdom = 0;
				itemsRes.data.forEach(item => {
					if (item.speed > 0) speed = speed + item.speed;
					if (item.power > 0) power = power + item.power;
					if (item.luck > 0) luck = luck + item.luck;
					if (item.wisdom > 0) wisdom = wisdom + item.wisdom;
					itemObj = {...itemObj, [item.name]: {...item}};
				});
				dispatch(updateAllItems(itemObj));
				dispatch(updateAllStats({speed: speed, power: power, luck: luck, wisdom: wisdom}));

				// Tokens
				let tokenObj = {
					gold: {name: Tokens.gold.name, qty: tokensRes.data[0].gold, img_url: Tokens.gold.img_url},
					diamond: {name: Tokens.diamond.name, qty: tokensRes.data[0].diamond, img_url: Tokens.diamond.img_url},
					ticket: {name: Tokens.ticket.name, qty: tokensRes.data[0].ticket, img_url: Tokens.ticket.img_url},
					fastForward: {name: Tokens.fastForward.name, qty: tokensRes.data[0].fastForward, img_url: Tokens.fastForward.img_url},
				};
				dispatch(updateAllTokens(tokenObj));

				// Quests
				dispatch(updateHeroQuest(questsRes.data.filter(ele => ele.isHeroQuest === 1)));

				// Navigate home
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