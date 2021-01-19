// React
import React from 'react';
import './QuestCard.css';

// Component
import ProgressBar from "../ProgressBar/ProgressBar";

// ========== COMPONENT ==========
const QuestCard = props => {
	return (
		<div className={`flex-full flex-row questCard`}>

			<div className={`flex-full testBox`}></div>

			<div className={`flex-full flex-col w100 infoContainer`}>
				<div className={`flex-full flex-row w100 quest-card__title-reward--container`}>
					<div className={`flex-full flex-row flex-jc-fs w100`}>
						<p className={`quest-card__title`}>{props.title}</p>
					</div>

					<div className={`flex-full flex-row quest-card__info-tab`}>
						<p className={`flex-full quest-card__info--button`}>Info</p>
						<p className={`flex-full quest-card__x--button`}>X</p>
					</div>
				</div>

				<ProgressBar
					duration={props.duration}
					loot={props.loot}
				/>

			</div>
		</div>
	)
};

export default QuestCard;