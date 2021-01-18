// React
import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import './HomeScreen.css';

// Navigation
// import { useDispatch } from 'react-redux';
// import { navigate } from '../../store/actions/navigationActions';

// Redux
import { useSelector } from 'react-redux';

// Components
import QuestCard from "../../componenets/QuestCard/QuestCard";
import Sidebar from "../../componenets/Sidebar/Sidebar";

// ========== COMPONENT ==========
const HomeScreen = props => {

	const currentPage = useSelector(state => state.navigationReducer.page);

	return (
		<div className={`flex-full flex-row w100 homeScreen`}>
			<Sidebar />

			<div className={`homeScreen__card-container`}>
				<QuestCard 
					title="Hero Quest"
					duration={50}
					loot={[
						{name: "Minecraft Axe", url: "./images/reward_axe.jpg", p: 99.95, color: "#1e6cd6", tick: 6},
						{name: "Gun", url: "./images/reward_gun.jpg", p: 99.99, color: "#000", tick: 6},
						{curr: true, name: "Bronze", url: "./images/curr_bronze.jpg", p: 98, color: "#674d56", tick: 2},
						{curr: true, name: "Silver", url: "./images/curr_silver.jpg", p: 98.5, color: "#969696", tick: 2},
						{curr: true, name: "Gold", url: "./images/curr_gold.jpg", p: 99.3, color: "#ffe946", tick: 2},
						{curr: true, name: "Red", url: "./images/curr_red.jpg", p: 99.7, color: "#fc5044", tick: 2},
						{win: true, name: "Ship", url: "./images/reward_ship.jpg", color: "#0fca18", tick: 10, qty: 5}
					]}
				/>
			</div>

			{currentPage === "Test" ?
				<div className={`flex-full homeScreen__test`}>
						hey
				</div>
			: null}
		</div>
	);

	// const dispatch = useDispatch();

	// const [thing, setThing] = useState("hey");

	// useEffect(() => {
	// 	axios.get("api/selectone")
	// 	.then((response) => {
	// 		console.log(setThing(response.data[0].item));
	// 	});
	// }, []);

	// return (
	// 	<div>
	// 		{thing} Home
	// 		<div onClick={() => dispatch(navigate("About"))}>click me</div>
	// 	</div>
	// );
};

export default HomeScreen;