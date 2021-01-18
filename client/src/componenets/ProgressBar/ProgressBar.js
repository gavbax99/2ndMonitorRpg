// React and CSS
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProgressBar.css';

import { updateMaterial } from "../../constants/functions";
import Tools from '../../constants/Tools';
import Materials from '../../constants/Materials';

const Tick = props => {
	return (
		<div className={`progressBar__tick`}
			style={{
				left: `${props.percent}%`, 
				width: `${props.width}px`, 
				backgroundColor: props.color
				}}>
			</div>
	);
};

const SingleCurrency = props => {
	const [display, setDisplay] = useState(false);

	return (
		<div 
			className={`flex-full flex-col currency__group`}
			onMouseEnter={() => { setDisplay(true) }}
			onMouseLeave={() => { setDisplay(false) }}>
			<img src={props.img_url} className={`flex-full currency__image`} alt={props.name} />
			<p className={`flex-full currency__count`}>{props.count}</p>

			<div 
				className={`flex-full flex-col currency__reward`}
				style={{ display: display ? "block" : "none" }}>
				<div className={`currency__reward--triangle`}></div>
				<p className={`flex-full currency__reward--text`}>
					{props.name}
				</p>
			</div>
		</div>
	);
};

const RewardIcon = props => {
	const [display, setDisplay] = useState(false);

	return (
		<div className={`flex-full currency__reward--container`}
			onMouseEnter={()=>{ setDisplay(true) }}
			onMouseLeave={()=>{ setDisplay(false) }}>
			<img src={props.img_url} alt="reward" className="currency__reward-icon" />

			<div 
				className={`flex-full flex-col loot__reward`}
				style={{ display: display ? "block" : "none" }}>
				<div className={`currency__reward--triangle`}></div>
				<p className={`flex-full currency__reward--text`}>
					{props.name} Hello here is some text for this shit man I dont know what else to say.
				</p>
			</div>
		</div>
	);
};

const Treasure = props => {
	const claim = () => {
		console.log("claimed")
		updateMaterial(1, Materials.lollipop.name, 1, Materials.lollipop.img_url);
		props.setTreasure(false);
		props.setRewards([...props.rewards, {
			name: Materials.lollipop.name, 
			img_url: Materials.lollipop.img_url
		}]);
	}

	useEffect(() => {
		const timeout = setTimeout(() => {			
			props.setTreasure(false);
		}, 10000);
		return () => clearTimeout(timeout);
	}, []);

	return (
		<div onClick={claim} className={`flex-full treasure__x`}>
			X
		</div>
	);
};


// ========== COMP ==========
const ProgressBar = props => {

	const [treasure, setTreasure] = useState(false);
	const [rewards, setRewards] = useState([]);
	const [expTime, setExpTime] = useState(Date.now() + (1000 * props.duration));
	const [startTime, setStartTime] = useState(Date.now());
	const [percent, setPercent] = useState(0);
	const [rewardTicks, setRewardTicks] = useState([]);
	const [currencyObj, setCurrencyObj] = useState(() => {
		let newObj = {};
		props.loot.forEach(loot => {
			if (loot.curr) { newObj = {...newObj, [loot.name]: 0}};
		})
		return newObj;
	});

	// Initiates 1s tick
	useEffect(() => {
		const interval = setInterval(() => {
			const maxTime = expTime - startTime;
			const currentPercent = ((maxTime-(expTime-Date.now()))/maxTime) * 100;
			currentPercent < 100 ? setPercent(currentPercent) : setPercent(100);

			// Clear interval after 100%
			if (currentPercent >= 100) {
				clearInterval(interval);
			};
			
			// Every 1s
			}, 1000);
		return () => clearInterval(interval);
	}, []);

	// Ticks every second 
	useEffect(() => {
		// Win condition
		if (percent === 100) {
			props.loot.forEach((lootObj) => {
				if (lootObj.win) {
					updateMaterial(1, lootObj.name, lootObj.qty, lootObj.img_url);
					setRewardTicks([...rewardTicks, {percent: percent, width: lootObj.tick, color: lootObj.color}]);
					setRewards([...rewards, {
						name: lootObj.name, 
						img_url: lootObj.img_url
					}]);
				}
			});
			return;
		};

		// Check each loot table every second
		let newCurrencyObj = {...currencyObj};
		let newRewardsArr = [...rewards];
		let newTickArr = [...rewardTicks];
		props.loot.forEach(lootObj => {
			const rng = Math.random() * 100;
			if (rng > lootObj.p) {
				updateMaterial(1, lootObj.name, 1, lootObj.img_url);
				// New tick
				newTickArr = [...newTickArr, {percent: percent, width: lootObj.tick, color: lootObj.color}];

				if (lootObj.curr) {
					// New currency
					newCurrencyObj = {...newCurrencyObj, [lootObj.name]: newCurrencyObj[lootObj.name] + 1};
				} else {
					// New item
					newRewardsArr = [...newRewardsArr, {
						name: lootObj.name,
						img_url: lootObj.img_url,
						number: 1,
					}];
				}
			};
		});
		setCurrencyObj(newCurrencyObj);
		setRewards(newRewardsArr);
		setRewardTicks(newTickArr);

		// TREASURE
		const rnggg = Math.random() * 100;
		console.log("rng", rnggg);
		if (rnggg > 95) { setTreasure(true) };
		// TREASURE
	}, [percent]);

	return (
		<div className={`flex-full flex-col w100 flex-ai-fs progressBar__container`}>

			{/* Treasure */}
			{treasure ? 
				<Treasure
					setTreasure={setTreasure}
					setRewards={setRewards}
					rewards={rewards}
				/> 
			: null}

			<div className={`flex-full flex-row w100 flex-ai-fs flex-jc-fs`}>
				<div className={`flex-full flex-col flex-ai-fs progressBar__currency--container`}>
					{/* Currencies */}
					<p className={`progressBar__subtitle`}>Currency</p>
					<div className={`flex-full flex-row`}>
						{props.loot.length > 0 ? props.loot.map((loot, i) => {
							if (loot.curr) {
								return (
									<SingleCurrency 
										name={loot.name}
										img_url={loot.img_url}
										count={currencyObj[loot.name]}
										key={i}
									/>
								);
							} else {
								return null;
							}
						}) : null}
					</div>
				</div>

				<div className={`flex-full flex-col flex-ai-fs`}>
					{/* Loot */}
					<p className={`progressBar__subtitle`}>Loot</p>
					<div className={`flex-full flex-row`}>
						{rewards.length > 0 ? rewards.map((reward, i) => {
							return (
								<RewardIcon
									img_url={reward.img_url}
									name={reward.name}
									key={i} 
								/>
							);
						}) : null}
					</div>
				</div>
			</div>
			
			{/* Progress */}
			<div className={`flex-full flex-row w100`}>
				<div className={`flex-full flex-col flex-ai-fs w100`}>
					<p className={`progressBar__subtitle`}>Progress Bar</p>
					<div className={`progressBar`}>
						<div 
							className={`progressBarFill`} 
							style={{ 
								width: `${percent}%`,
								backgroundColor: percent >= 100 ? "#0fca18" : "red"
							}}></div>
						{rewardTicks.length > 0 ? rewardTicks.map((obj, i) => {
							return (
								<Tick 
									percent={obj.percent} 
									width={obj.width} 
									color={obj.color} 
									key={i}
								/>
							);
						})
						: null
						}
					</div>
				</div>

				<p className={`flex-full progressPercent`}>{parseFloat(percent).toFixed(2)}%</p>
			</div>
		</div>
	);
};

export default ProgressBar;