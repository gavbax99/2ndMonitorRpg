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
			<p className={`heroQuestCard__loot--text`}>{props.value}</p>

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
	const [lootCurrencyArr, setLootCurrencyArr] = useState(props.loot.filter(ele => ele.curr === 1));
	const [lootMaterialArr, setLookMaterialArr] = useState(props.loot.filter(ele => ele.curr === 0));

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
				<div className={`flex-full flex-col flex-ai-fs w100 heroQuestCard__lootContainer`}>
					<div className={`flex-full flex-col heroQuestCard__loot`}>
						<p className={`flex-full heroQuestCard__loot--text`}>Currency</p>

						{lootCurrencyArr.map((ele) => {
							<SingleReward 
								name={props.loot[0].name}
								img_url={props.loot[0].img_url}
								value={0}
							/>
						})}

						{/* <img className={`heroQuestCard__loot--image`} src={props.loot[0].img_url} alt={props.loot[0].name} /> */}
					</div>
				</div>

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