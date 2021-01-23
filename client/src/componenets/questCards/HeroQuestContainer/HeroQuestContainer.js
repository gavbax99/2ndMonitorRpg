// React and CSS
import React, { useEffect, useState } from 'react';
import axios from "axios";
import './HeroQuestContainer.css';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { updateHeroQuest } from "../../../store/actions/actions";

// Constants
import Materials from "../../../constants/Materials";

// Components
import HeroQuestCard from "../HeroQuestCard/HeroQuestCard";

const HeroQuestContainer = props => {

	// Redux
	const dispatch = useDispatch();
	const heroQuestObj = useSelector(state => state.reducer.heroQuestObj);

	// State
	const [hasQuest, setHasQuest] = useState(false);
	const [questId, setQuestId] = useState();
	const [questName, setQuestName] = useState();
	const [timeStarted, setTimeStarted] = useState();
	const [timeFinished, setTimeFinished] = useState();
	const [timeNow, setTimeNow] = useState(Date.now());

	// Give quest
	const giveQuest = async (newQuestName, newQuestDuration) => {
		const now = Date.now();
		axios.put("/api/startQuest", {
			uid: 1,
			questName: newQuestName,
			isHeroQuest: true,
			startTime: now.toString(),
			endTime: (now + (1000 * newQuestDuration)).toString(),
			lootObj: JSON.stringify([1,2])
		}).then(res => {
			const resData = JSON.parse(res.config.data);
			axios.get(`/api/getQuests/${resData.uid}`).then(ress => {
				const data = ress.data[0];
				setQuestName(data.questName);
				setTimeNow(parseInt(data.startTime));
				setTimeStarted(parseInt(data.startTime));
				setTimeFinished(parseInt(data.endTime));
				dispatch(updateHeroQuest(ress.data));
				setHasQuest(true);
			});
		});
	};

	// Remove quest
	const removeQuest = async (id) => {
		console.log(id);
		axios.delete(`/api/removeQuest/${id}`).then((res) => {
			dispatch(updateHeroQuest([]));
			setHasQuest(false);
		});
	}

	useEffect(() => { 
		if (heroQuestObj.length > 0) {
			setQuestId(parseInt(heroQuestObj[0].id));
			setQuestName(heroQuestObj[0].questName);
			setTimeStarted(parseInt(heroQuestObj[0].startTime));
			setTimeFinished(parseInt(heroQuestObj[0].endTime));
			setHasQuest(true);
		}
	}, [heroQuestObj]);

	return (
		<div className={`flex-full w100 heroQuestContainer`}>
			{hasQuest ? 
				<HeroQuestCard 
					id={questId}
					title={questName}
					timeStarted={timeStarted}
					timeFinished={timeFinished}
					timeNow={timeNow}
					setHasQuest={setHasQuest}
					removeQuest={removeQuest}
					loot={{
						[Materials.bronze.name]: Materials.bronze,
						[Materials.silver.name]: Materials.silver,
						[Materials.gold.name]: Materials.gold,
						[Materials.mythril.name]: Materials.mythril,
						[Materials.ship.name]: Materials.ship,
					}}
				/>
			: 
				<div onClick={() => { giveQuest("Test", 100) }}>
					Give quest
				</div>
			}
		</div>
	);
};

export default HeroQuestContainer;