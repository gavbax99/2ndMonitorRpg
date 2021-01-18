// React
import React, { useState } from 'react';
import './Sidebar.css';

// Navigation
import { useDispatch } from 'react-redux';
import { navigate } from '../../store/actions/navigationActions';

// Tools
import Tools from "../../constants/Tools";

const Currency = props => {
	return (
		<div className={`flex-full flex-col sidebar__currency--single`}>
			<img src={props.url} alt={props.name} className="sidebar__currency--image"/>
			<p className="sidebar__currecncy--number">50</p>
		</div>
	);
};

const Material = props => {
	return (
		<div className={`flex-full flex-col sidebar__materials--single`}>
			<div className="sidebar__materials--imageplaceholder"></div>
			<p className="sidebar__materials--number">12</p>
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

	const dispatch = useDispatch();

	const [nav, setNav] = useState(0);

	const [toggleCurrency, setToggleCurrency] = useState(false);
	const [toggleMaterials, setToggleMaterials] = useState(false);

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
						setNav(2);
						dispatch(navigate("Home"));
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
							url={Tools.c_bronze}
							name="Bronze"
						/>
						<Currency 
							url={Tools.c_silver}
							name="Silver"
						/>
						<Currency 
							url={Tools.c_gold}
							name="Gold"
						/>
						<Currency 
							url={Tools.c_blue}
							name="Blue"
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
						<Material />
						<Material />
						<Material />
						<Material />
						<Material />
						<Material />
						<Material />
						<Material />
						<Material />
						<Material />
						<Material />
						<Material />
						<Material />
						<Material />
						<Material />
					</div>
					:
					null
				}
			</div>

		</div>
	);
};

export default Sidebar;