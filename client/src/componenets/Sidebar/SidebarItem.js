// React and CSS
import React, { useState, useEffect } from 'react';
import './Sidebar.css';

const SidebarItem = props => {
	const [hover, setHover] = useState(false);
	const [percent, setPercent] = useState(50);
	const [statsObj, setStatsObj] = useState({});

	useEffect(() => {
		let newStatsObj = {};
		props.stats.forEach((stat, i) => {
			if (stat > 0) {
				let name = "x";
				switch (i) {
					case 0:
						name = "Speed";
						break;
					case 1: 
						name = "Power";
						break;
					case 2: 
						name = "Luck";
						break;
					case 3: 
						name = "Wisdom";
						break;
					default: break;
				};

				newStatsObj = {...newStatsObj, [name]: {name: name, value: stat}};
			};
			setStatsObj(newStatsObj);
		});
	}, [props]);
	
	return (
		<div className={`flex-full flex-col flex-jc-sb w100 sidebarItem`}
			onMouseEnter={() => { setHover(true) }}
			onMouseLeave={() => { setHover(false) }}
			style={{backgroundImage: `url(${props.img_url})`}}>
			
			{/* Name and level */}
			<div className={`flex-full flex-row flex-jc-sb flex-ai-fs w100 sidebarItem__info`}>
				<p className={`sidebarItem__name`}>{props.name}</p>
				<p className={`w100 sidebarItem__level`}>{props.level}</p>
			</div>

			{/* Progress bar */}
			<div class={`flex-full flex-jc-fs w100 sidebarItem__progressContainer`}>
				<div 
					className={`sidebarItem__fill`} 
					style={{ 
						width: `${percent}%`,
						backgroundColor: percent >= 100 ? "#0fca18" : "red"
					}}
				></div>
			</div>

			{/* Hover */}
			<div className={`flex-full flex-col sidebarItem__hidden`}
				style={{ display: hover ? "block" : "none" }}>
				<div className={`sidebarItem__hidden--triangle`}></div>

				<div className={`flex-full flex-row flex-jc-sb w100 sidebarItem__hidden--infoGroup`}>
					<p className={`sidebarItem__hidden--title`}>{props.name}</p>
					<p className={`sidebarItem__hidden--title`}>{props.level}</p>
				</div>

				{statsObj && Object.keys(statsObj).map(stat => {
					return (
						<div className={`flex-full flex-row flex-jc-sb sidebarItem__stat`} key={statsObj[stat].name}>
							<p className={`flex-full sidebarItem__stat--name`}>{statsObj[stat].name}</p>
							<p className={`flex-full sidebarItem__stat--value`}>{statsObj[stat].value}</p>
						</div>
					);
				})}

			</div>			
		</div>
	);
};

export default SidebarItem;