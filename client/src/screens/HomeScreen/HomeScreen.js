// React
import React, { useState } from 'react';
import './HomeScreen.css';

// Redux
// import { useSelector } from 'react-redux';

// Components
// import QuestCard from "../../componenets/QuestCard/QuestCard";

// import HeroQuestCard from "../../componenets/questCards/HeroQuestCard/HeroQuestCard";
import HeroQuestContainer from "../../componenets/questCards/HeroQuestContainer/HeroQuestContainer";
import Sidebar from "../../componenets/Sidebar/Sidebar";

// Constants
// import Materials from '../../constants/Materials';

// ========== COMPONENT ==========
const HomeScreen = props => {

	//Redux
	// const heroQuestObj = useSelector(state => state.reducer.heroQuestObj);
	// const otherQuestObj = useSelector(state => state.reducer.otherQuestObj);

	// State
	// const [hasQuest, setHasQuest] = useState(false);
	// const [timeStarted, setTimeStarted] = useState();
	// const [timeFinished, setTimeFinished] = useState();
	// const [timeNow, setTimeNow] = useState(Date.now());

	// const giveQuest = (questDuration) => {
	// 	const now = Date.now();
	// 	console.log(now)
	// 	console.log(now + (1000 * questDuration))
	// 	setTimeNow(now);
	// 	setTimeStarted(now);
	// 	setTimeFinished(now + (1000 * questDuration));
	// 	setHasQuest(true);
	// };

	return (
		<div className={`flex-full flex-row w100 homeScreen`}>
			<Sidebar />

			<div className={`homeScreen__card-container`}>
				<HeroQuestContainer />

				{/* {hasQuest ? 
					<HeroQuestCard 
						title="Hero Quest 2"
						// questDuration={100}
						timeStarted={timeStarted}
						timeFinished={timeFinished}
						timeNow={timeNow}
						setHasQuest={setHasQuest}
						loot={[
	
						]}
					/>
				:
					<div onClick={() => { giveQuest(100) }}>
						Give quest
					</div>
				} */}
			</div>
		</div>
	);
};

export default HomeScreen;