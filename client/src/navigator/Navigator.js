// React and CSS
import React from 'react';
import './Navigator.css';

// Redux
import { useSelector } from 'react-redux';

// Screens
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import AboutScreen from "../screens/AboutScreen/AboutScreen";

const Navigator = props => {

	const currentPage = useSelector(state => state.navigationReducer.page);

	const RenderPage = () => {
		if      (currentPage === "Home")  return <HomeScreen />
		else if (currentPage === "About") return <AboutScreen />
		else return <h1>Page not found</h1>
	};

	return (
		<div className={`flex-full flex-row w100`}>
			{/* <RenderPage /> */}
			<HomeScreen />
		</div>
	);
};

export default Navigator;