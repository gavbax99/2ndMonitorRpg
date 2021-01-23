// React
import React, { useEffect, useState } from 'react';
import axios from "axios";
import './HeroQuestCard.css';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { updateAllCurrencies, updateAllMaterials } from '../../../store/actions/actions';

// Components
import QuestProgressBar from "../QuestProgressBar/QuestProgressBar";

// Functions
import { updateMaterial } from "../../../constants/Functions";


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

	// Redux
	const dispatch = useDispatch();
	const currencyObj = useSelector(state => state.reducer.currencyObj);
	const materialObj = useSelector(state => state.reducer.materialObj);

	// State
	const [lootObj, setLootObj] = useState(props.loot);

	// Updating loot opject's qty
	const updateLootQty = (lootArr) => {
		// Update local loot state and redux state
		let newLootObj = {...lootObj};
		let newCurrencyObj = {...currencyObj};
		let newMaterialObj = {...materialObj};

		lootArr.forEach(loot => {
			// Update the loot's quantity
			newLootObj = {...newLootObj, [`${loot.name}`]: {...newLootObj[`${loot.name}`], qty: newLootObj[`${loot.name}`].qty + loot.qty}};

			// Update the loot's quantity in redux
			if (loot.curr) {
				newCurrencyObj = {...newCurrencyObj, [`${loot.name}`]: {...newCurrencyObj[`${loot.name}`], qty: newCurrencyObj[`${loot.name}`].qty + loot.qty}};
			} else {
				newMaterialObj = {...newMaterialObj, [`${loot.name}`]: {...newMaterialObj[`${loot.name}`], qty: newMaterialObj[`${loot.name}`].qty + loot.qty}};
			}

			// Update DB
			updateMaterial(1, loot.name, loot.qty, loot.img_url);
		});

		setLootObj(newLootObj);
		dispatch(updateAllCurrencies(newCurrencyObj));
		dispatch(updateAllMaterials(newMaterialObj));
	};

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
						<p className={`flex-full heroQuestCard__button--info`}>?</p>
						<p className={`flex-full heroQuestCard__button--x`} onClick={removeQuest}>x</p>
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
								if (!lootObj[loot].curr && lootObj[loot].qty > 0) {
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
					}}>11111</div> */}

					{/* <div onClick={() => {
						console.log(currencyObj);
						console.log(materialObj);
					}}>22222</div> */}


				</div>

				{/* Progress bar */}
				<QuestProgressBar
					timeStarted={props.timeStarted}
					timeFinished={props.timeFinished}
					timeNow={props.timeNow}
					updateLootQty={updateLootQty}
					loot={props.loot}
				/>

			</div>

		</div>
	)
};

export default HeroQuestCard;