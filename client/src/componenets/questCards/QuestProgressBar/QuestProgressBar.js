// React and CSS
import React, { useState, useEffect } from 'react';
import './QuestProgressBar.css';

// Redux
import { useSelector } from 'react-redux';

// COMPONENT: tick
const Tick = props => {
	return (
		<div 
			className={`questProgressBar__tick`}
			style={{
				left: `${props.percent}%`, 
				top: `${props.top}px`, 
				width: `${props.width}px`, 
				height: `${props.width}px`, 
				backgroundColor: props.color
			}}>
		</div>
	);
};

// ========== COMPONENT ==========
const QuestProgressBar = props => {

	// State
	const statsObj = useSelector(state => state.reducer.statsObj);

	const [enabled, setEnabled] = useState(false);
	const [startTime, setStartTime] = useState(props.timeStarted);
	const [expTime, setExpTime] = useState(props.timeFinished);
	const [lootObj, setLootObj] = useState(props.loot);
	const [percent, setPercent] = useState(0);
	const [ticks, setTicks] = useState([]);

	// Initiate loop
	useEffect(() => {
		// Time is a fixed 750ms with 250ms extra that lowers with item speed. 1 speed = 0.25ms
		const time = 750 + (250 * (1 - statsObj.speed/1000));

		const interval = setInterval(() => { loop(interval) }, time);
		loop(interval);
		setEnabled(true);
		return () => clearInterval(interval);
	}, []);

	const loop = (interval) => {
		const maxTime = expTime - startTime;
		const currentPercent = ((maxTime-(expTime-Date.now()))/maxTime) * 100;
		currentPercent < 100 ? setPercent(currentPercent) : setPercent(100);

		// Clear interval after 100%
		if (currentPercent >= 100) {
			props.setQuestCompleted(true);
			clearInterval(interval);
		};
	};

	// GAME LOOP LOGIC
	useEffect(() => {
		if (percent >= 100) {
			// Win condition


		} else if (enabled) {
			// Loot roll
			rollForLoot();


			// Treasure
		};	
	}, [percent]);

	// Loot roll
	const rollForLoot = () => {
		if (percent >= 100) return;

		// > [{name: "name", qty: qty}, {...}]
		let lootArr = [];
		let matArr = [...ticks];

		// For each material, roll to see if won
		Object.keys(lootObj).forEach(loot => {
			const rng = Math.random() * 100;
			if (rng > lootObj[loot].p) {
				lootArr = [...lootArr, { name: lootObj[loot].name, qty: 1, img_url: lootObj[loot].img_url, curr: lootObj[loot].curr }];
				matArr = [...matArr, { percent: percent, width: lootObj[loot].tick, top: lootObj[loot].tickTop, color: lootObj[loot].color }];
			};
		});

		// If anything won, update ticks and qty
		if (lootArr.length > 0) {
			setTicks(matArr);
			props.updateLootQty(lootArr);
		};
	};

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
						{ticks.length > 0 ? ticks.map((tick, i) => {
							return (
								<Tick 
									percent={tick.percent} 
									width={tick.width}
									top={tick.top}
									color={tick.color} 
									key={i}
								/>
							);
						}) : null}
					</div>
				</div>

				{/* Percent complete */}
				<p className={`flex-full questProgressBar__percent`}>{parseFloat(percent).toFixed(2)}%</p>
			</div>
		</div>
	);
};

export default QuestProgressBar;