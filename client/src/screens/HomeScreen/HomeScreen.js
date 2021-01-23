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

import HeroQuestCard from "../../componenets/questCards/HeroQuestCard/HeroQuestCard";
import Sidebar from "../../componenets/Sidebar/Sidebar";

// Constants
import Materials from '../../constants/Materials';

// ========== COMPONENT ==========
const HomeScreen = props => {

	const currentPage = useSelector(state => state.reducer.page);

	return (
		<div className={`flex-full flex-row w100 homeScreen`}>
			<Sidebar />

			<div className={`homeScreen__card-container`}>


				{/* <QuestCard 
					title="Hero Quest"
					duration={200}
					loot={[
						{...Materials.axe, p: 99.5},
						{...Materials.gun, p: 99},
						{...Materials.bronze, p: 93},
						{...Materials.silver, p: 96},
						{...Materials.gold, p: 98},
						{...Materials.mythril, p: 99},
						{...Materials.ship, win: true, qty: 5}
					]}
				/> */}

				<HeroQuestCard 
					title="Hero Quest 2"
					questDuration={100}
					loot={[

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