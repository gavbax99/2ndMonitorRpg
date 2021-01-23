// React
import React from 'react';
import './HeroQuestCard.css';

// Components
import QuestProgressBar from "../QuestProgressBar/QuestProgressBar";


// ========== COMPONENT ==========
const HeroQuestCard = props => {



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
						<p className={`flex-full heroQuestCard__button--x`}>X</p>
					</div>
				</div>

				{/* Loot */}
				{/* .... */}

				<QuestProgressBar
					questDuration={props.questDuration}
					loot={props.loot}
				/>

			</div>

		</div>
	)
};

export default HeroQuestCard;