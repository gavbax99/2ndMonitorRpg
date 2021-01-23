// React
import React, { useState } from 'react';
import './HeroQuestCard.css';

// Components
import QuestProgressBar from "../QuestProgressBar/QuestProgressBar";


// COMPONENT: single reward
const SingleReward = props => {
	const [display, setDisplay] = useState(false);

	return (
		<div className={`flex-full flex-col singleReward__container`}
			onMouseEnter={()=>{ setDisplay(true) }}
			onMouseLeave={()=>{ setDisplay(false) }}>
			<img src={props.img_url} alt="reward" className="singleReward__rewardIcon" />
			<p className={`singleReward__value`}>{props.value}</p>

			<div 
				className={`flex-full flex-col singleReward__hiddenText`}
				style={{ display: display ? "block" : "none" }}>
				<div className={`singleReward__hiddenText--triangle`}></div>
				<p className={`flex-full singleReward__hiddenText--text`}>
					{props.name}
				</p>
			</div>
		</div>
	);
};


// ========== COMPONENT ==========
const HeroQuestCard = props => {

	// State
	const [lootObj, setLootObj] = useState(props.loot);

	// Updating loot opject's qty
	// const updateLootQty = (keyName, qty) => {
	// 	setLootObj({...lootObj, [`${keyName}`]: { ...lootObj[`${keyName}`], qty: qty }});
	// };

	// Remove the quest
	const removeQuest = () => {
		props.removeQuest(props.id);
	};

	return (
		<div className={`flex-full flex-row heroQuestCard`}>

			{/* Image */}
			<div className={`flex-full heroQuestCard__image`}></div>

			{/* Info container */}
			<div className={`flex-full flex-col w100 heroQuestCard__info`}>

				{/* Name and info */}
				<div className={`flex-full flex-row w100 heroQuestCard__header`}>
					<div className={`flex-full flex-row flex-jc-fs w100`}>
						<p className={`heroQuestCard__header--title`}>{props.title}</p>
					</div>

					<div className={`flex-full flex-row heroQuestCard__buttons`}>
						<p className={`flex-full heroQuestCard__button--info`}>Info</p>
						<p className={`flex-full heroQuestCard__button--x`} onClick={removeQuest}>X</p>
					</div>
				</div>

				{/* Loot */}
				<div className={`flex-full flex-row flex-jc-fs w100 heroQuestCard__lootContainer`}>

					{/* Currencies */}
					<div className={`flex-full flex-col flex-ai-fs heroQuestCard__loot`}>
						<p className={`flex-full heroQuestCard__loot--text`}>Currency</p>
						<div className={`flex-full flex-row heroQuestCard__loot--currencies`}>
							{lootObj && Object.keys(lootObj).map((loot) => {
								// console.log(lootObj[loot]);
								if (lootObj[loot].curr) {
									return (
										<SingleReward 
											name={lootObj[loot].name}
											img_url={lootObj[loot].img_url}
											value={lootObj[loot].qty}
											key={lootObj[loot].name}
										/>
									);
								} else {
									return null;
								}
							})}
						</div>
					</div>

					{/* Loot */}
					<div className={`flex-full flex-col flex-ai-fs heroQuestCard__loot`}>
						<p className={`flex-full heroQuestCard__loot--text`}>Loot</p>
						<div className={`flex-full flex-row heroQuestCard__loot--currencies`}>
							{lootObj && Object.keys(lootObj).map((loot) => {
								// console.log(lootObj[loot]);
								if (!lootObj[loot].curr && lootObj[loot].qty >= 0) {
									return (
										<SingleReward 
											name={lootObj[loot].name}
											img_url={lootObj[loot].img_url}
											value={lootObj[loot].qty}
											key={lootObj[loot].name}
										/>
									);
								} else {
									return null;
								}
							})}
						</div>
					</div>


					{/* <div onClick={() => {
						setLootObj({...lootObj, [`Bronze`]: { ...lootObj[`Bronze`], qty: lootObj[`Bronze`].qty + 1 }})
					}}>11111</div>

					<div onClick={() => {
						console.log(lootObj)
						console.log(lootObj["Bronze"])
					}}>22222</div> */}


				</div>

				{/* Progress bar */}
				<QuestProgressBar
					timeStarted={props.timeStarted}
					timeFinished={props.timeFinished}
					timeNow={props.timeNow}
					loot={props.loot}
				/>

			</div>

		</div>
	)
};

export default HeroQuestCard;