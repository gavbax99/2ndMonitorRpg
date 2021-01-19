// React
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Sidebar.css';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { navigate } from '../../store/actions/navigationActions';

// Tools
import Materials from "../../constants/Materials";

const Currency = props => {
	return (
		<div className={`flex-full flex-col sidebar__currency--single`}>
			<img src={props.img_url} alt={props.name} className="sidebar__currency--image"/>
			<p className="sidebar__currecncy--number">{props.value}</p>
		</div>
	);
};

const Material = props => {
	return (
		<div className={`flex-full flex-col sidebar__materials--single`}>
			<img src={props.img_url} alt={props.name} className="sidebar__currency--image"/>
			<p className="sidebar__materials--number">{props.value}</p>
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
	const currencyBronze = useSelector(state => state.currencyReducer.Bronze);
	const currencySilver = useSelector(state => state.currencyReducer.Silver);
	const currencyGold = useSelector(state => state.currencyReducer.Gold);
	const currencyMythril = useSelector(state => state.currencyReducer.Mythril);
	const materialObj = useSelector(state => state.currencyReducer.materialObj);

	const [nav, setNav] = useState(0);
	const [toggleCurrency, setToggleCurrency] = useState(true);
	const [toggleMaterials, setToggleMaterials] = useState(true);

	return (
		<div className={`flex-full flex-col sidebar`}>
			{/* Nav */}
			<nav className={`flex-full flex-row w100 sidebar__nav`}>
				<div className={`flex-full`}
					style={{ backgroundColor: nav === 0 ? "rgb(240, 240, 240)" : "rgb(167, 160, 160)" }}
					onClick={() => { 
						setNav(0);
						dispatch(navigate("Home"));
					}}>
					O
				</div>
				<div className={`flex-full`}
					style={{ backgroundColor: nav === 1 ? "rgb(240, 240, 240)" : "rgb(167, 160, 160)" }}
					onClick={() => { 
						setNav(1);
						dispatch(navigate("Test"));
					}}>
					O
				</div>
				<div className={`flex-full`}
					style={{ backgroundColor: nav === 2 ? "rgb(240, 240, 240)" : "rgb(167, 160, 160)" }}
					onClick={() => { 
						// setNav(2);
						// dispatch(navigate("Home"));

					}}>
					O
				</div>
			</nav>

			{/* Content */}
			<div className={`flex-full flex-col w100 sidebar__content`}>
				<p className="sidebar__username">MEGABUTT</p>

				<Level />

				{/* Currency */}
				<div
					onClick={() => { setToggleCurrency(!toggleCurrency) }}
					className={`flex-full flex-row w100 sidebar__dropdown--title`}>
					<p>x</p>
					<p>Currency</p>
				</div>
				{toggleCurrency ?
					<div className={`flex-full flex-row w100 sidebar__currency--container`}>
						<Currency 
							img_url={Materials.bronze.img_url}
							name="Bronze"
							value={currencyBronze}
						/>
						<Currency 
							img_url={Materials.silver.img_url}
							name="Silver"
							value={currencySilver}
						/>
						<Currency 
							img_url={Materials.gold.img_url}
							name="Gold"
							value={currencyGold}
						/>
						<Currency 
							img_url={Materials.mythril.img_url}
							name="Mythril"
							value={currencyMythril}
						/>
					</div>
					:
					null
				}

				{/* Materials */}
				<div
					onClick={() => { setToggleMaterials(!toggleMaterials) }}
					className={`flex-full flex-row w100 sidebar__dropdown--title`}>
					<p>x</p>
					<p>Materials</p>
				</div>
				{toggleMaterials ?
					<div className={`flex-full flex-row w100 sidebar__materials--container`}>
{/* 
						<div style={{height: "20px", width: "100%"}} onClick={() => {
							console.log(currencyBronze);
						}}>X</div> */}

						{Object.keys(materialObj).length > 0 ? Object.keys(materialObj).map((mat, i) => {
							return (
								<Material 
									img_url={materialObj[mat].img_url}
									name={materialObj[mat].mat}
									value={materialObj[mat].qty}
									key={i}
								/>
							)
						})
						: null}

					</div>
					:
					null
				}
			</div>

		</div>
	);
};

export default Sidebar;