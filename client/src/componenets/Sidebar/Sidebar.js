// React
import React, { useEffect, useState } from 'react';
import './Sidebar.css';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { navigate, updateAllStats } from '../../store/actions/actions';

// Tools
import Materials from "../../constants/Materials";


// Components
import SidebarItem from "./SidebarItem";

const Currency = props => {
	const [hover, setHover] = useState(false);

	return (
		<div className={`flex-full flex-col sidebar__currency--single`}
			onMouseEnter={() => { setHover(true) }}
			onMouseLeave={() => { setHover(false) }}>
			<img src={props.img_url} alt={props.name} className="sidebar__currency--image"/>
			<p className="sidebar__currecncy--number">{props.value}</p>

			<div className={`flex-full sidebar__currency--hidden`}
				style={{ display: hover ? "block" : "none" }}>
				<div className={`sidebar__currency--triangle`}></div>
				<p className={`flex-full`} style={{whiteSpace: "nowrap"}}>
					{props.name}
				</p>
			</div>
		</div>
	);
};

const Material = props => {
	const [hover, setHover] = useState(false);
	
	return (
		<div className={`flex-full flex-col sidebar__materials--single`}
			onMouseEnter={() => { setHover(true) }}
			onMouseLeave={() => { setHover(false) }}>
			<img src={props.img_url} alt={props.name} className="sidebar__currency--image"/>
			<p className="sidebar__materials--number">{props.value}</p>

			<div className={`flex-full sidebar__currency--hidden`}
				style={{ display: hover ? "block" : "none" }}>
				<div className={`sidebar__currency--triangle`}></div>
				<p className={`flex-full`}>
					{props.name}
				</p>
			</div>
		</div>
	);
};

const Level = props => {
	return (
		<div className={`flex-full flex-col w100 sidebar__level--container`}>
			<div className={`flex-full sidebar__level--backdrop`}></div>
			<p className={`flex-full sidebar__level`}>2</p>
			<div className={`flex-full flex-row sidebar__level--progressBar`}>
				<div className={`flex-full sidebar__level--progressBarFill`} style={{ width: "50%" }}></div>
			</div>
		</div>
	);
};

// ========== COMPONENT ==========
const Sidebar = props => {

	// Redux
	const dispatch = useDispatch();

	// State
	const tokenObj = useSelector(state => state.reducer.tokenObj);
	const currencyObj = useSelector(state => state.reducer.currencyObj);
	const materialObj = useSelector(state => state.reducer.materialObj);
	const heroQuestObj = useSelector(state => state.reducer.heroQuestObj);
	const itemsObj = useSelector(state => state.reducer.itemsObj);
	const statsObj = useSelector(state => state.reducer.statsObj);

	const [toggleCurrency, setToggleCurrency] = useState(true);
	const [toggleMaterials, setToggleMaterials] = useState(true);
	const [toggleAvatar, setToggleAvatar] = useState(true);

	// const [nav, setNav] = useState(0);

	console.log("stats", statsObj);

	return (
		<div className={`flex-full flex-col sidebar`}>
			{/* Nav */}
			{/* <nav className={`flex-full flex-row w100 sidebar__nav`}>
				<div className={`flex-full`}
					style={{ backgroundColor: nav === 0 ? "rgb(240, 240, 240)" : "rgb(167, 160, 160)" }}
					onClick={() => { 
						setNav(0);
					}}>
					O
				</div>
				<div className={`flex-full`}
					style={{ backgroundColor: nav === 1 ? "rgb(240, 240, 240)" : "rgb(167, 160, 160)" }}
					onClick={() => { 
						setNav(1);
					}}>
					O
				</div>
				<div className={`flex-full`}
					style={{ backgroundColor: nav === 2 ? "rgb(240, 240, 240)" : "rgb(167, 160, 160)" }}
					onClick={() => { 
						setNav(2);
					}}>
					O
				</div>
			</nav> */}


			{/* Content */}
			<div className={`flex-full flex-col w100 sidebar__content`}>
				<p className="sidebar__username">MEGABUTT</p>

				{/* Level and icon */}
				<Level />

				{/* Weapon / Trinket */}
				<div
					onClick={() => { setToggleAvatar(!toggleAvatar) }}
					className={`flex-full flex-row w100 sidebar__dropdown--title`}>
					<p>x</p>
					<p>Items</p>
				</div>
				{toggleAvatar &&
					<div className={`flex-full flex-row w100 sidebar__materials--container`}>
						{itemsObj && Object.keys(itemsObj).map(item => {
							return (
								<SidebarItem 
									name={itemsObj[item].name}
									img_url={itemsObj[item].img_url}
									level={itemsObj[item].level}
									exp={itemsObj[item].exp}
									stats={[itemsObj[item].speed, itemsObj[item].power, itemsObj[item].luck, itemsObj[item].wisdom]}
									key={itemsObj[item].name}
								/>
							);
						})}
					</div>
				}

				{/* Tokens */}
				<div
					onClick={() => { setToggleCurrency(!toggleCurrency) }}
					className={`flex-full flex-row w100 sidebar__dropdown--title`}>
					<p>x</p>
					<p>Tokens</p>
				</div>
				{toggleCurrency ?
					<div className={`flex-full flex-row w100 sidebar__materials--container`}>
						{tokenObj && Object.keys(tokenObj).map(token => {
							return (
								<Currency 
									img_url={tokenObj[token].img_url}
									name={tokenObj[token].name}
									value={tokenObj[token].qty}
									key={tokenObj[token].name}
								/>
							)
						})}
					</div>
				: null }

				{/* Currency */}
				<div
					onClick={() => { setToggleCurrency(!toggleCurrency) }}
					className={`flex-full flex-row w100 sidebar__dropdown--title`}>
					<p>x</p>
					<p>Currency</p>
				</div>
				{toggleCurrency ?
					<div className={`flex-full flex-row w100 sidebar__materials--container`}>
						{currencyObj && Object.keys(currencyObj).map(currency => {
							return (
								<Currency 
									img_url={currencyObj[currency].img_url}
									name={currencyObj[currency].mat}
									value={currencyObj[currency].qty}
									key={currencyObj[currency].mat}
								/>
							)
						})}
					</div>
				: null }

				{/* Materials */}
				<div
					onClick={() => { setToggleMaterials(!toggleMaterials) }}
					className={`flex-full flex-row w100 sidebar__dropdown--title`}>
					<p>x</p>
					<p>Materials</p>
				</div>
				{toggleMaterials ?
					<div className={`flex-full flex-row w100 sidebar__materials--container`}>
						{materialObj && Object.keys(materialObj).map(mat => {
							return (
								<Material 
									img_url={materialObj[mat].img_url}
									name={materialObj[mat].mat}
									value={materialObj[mat].qty}
									key={materialObj[mat].mat}
								/>
							)
						})}
					</div>
				: null }
						
				{/* <div style={{height: "20px", width: "100%"}} onClick={() => {
					dispatch(updateAllStats({
						speed: 1000,
						power: 0,
						luck: 0,
						wisdom: 0
					}));
				}}>X</div> */}

			</div>

		</div>
	);
};

export default Sidebar;