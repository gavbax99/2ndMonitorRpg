// React and CSS
import React, { useState, useEffect } from 'react';
import './QuestProgressBar.css';

// I take in time and use a game loop to display percent or roll for loot
const QuestProgressBar = props => {

	// State
	const [startTime, setStartTime] = useState(props.timeStarted);
	const [expTime, setExpTime] = useState(props.timeFinished);
	const [timeNow, setTimeNow] = useState(props.timeNow);
	const [percent, setPercent] = useState(0);

	// Initiate loop
	useEffect(() => {
		const interval = setInterval(() => { loop(interval) }, 1000);
		loop(interval);
		return () => clearInterval(interval);
	}, []);

	const loop = (interval) => {
		const maxTime = expTime - startTime;
		const currentPercent = ((maxTime-(expTime-Date.now()))/maxTime) * 100;
		currentPercent < 100 ? setPercent(currentPercent) : setPercent(100);

		// Clear interval after 100%
		if (currentPercent >= 100) {
			clearInterval(interval);
		};
	};

	// GAME LOOP LOGIC
	useEffect(() => {
		// Win condition
		if (percent === 100) {

			return;
		};

		// Loot roll

		// Treasure
		
	}, [percent]);

	return (
		<div className={`flex-full flex-col w100 flex-ai-fs questProgressBar`}>

			{/* Progress */}
			<div className={`flex-full flex-row w100`}>
				<div className={`flex-full flex-col flex-ai-fs w100`}>
					<p className={`questProgressBar__subtitle`}>Progress Bar</p>
					<div className={`questProgressBar__bar`}>
						<div 
							className={`questProgressBar__fill`} 
							style={{ 
								width: `${percent}%`,
								backgroundColor: percent >= 100 ? "#0fca18" : "red"
							}}>
						</div>

						{/* Tick */}
						{/* {rewardTicks.length > 0 ? rewardTicks.map((obj, i) => {
							return (
								<Tick 
									percent={obj.percent} 
									width={obj.width} 
									color={obj.color} 
									key={i}
								/>
							);
						}) : null} */}
					</div>
				</div>

				{/* Percent complete */}
				<p className={`flex-full questProgressBar__percent`}>{parseFloat(percent).toFixed(2)}%</p>
			</div>
		</div>
	);
};

export default QuestProgressBar;