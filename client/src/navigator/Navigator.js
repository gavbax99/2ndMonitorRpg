// React and CSS
import React from 'react';
import './Navigator.css';

// Redux
import { useSelector } from 'react-redux';

// Screens
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import LoadingScreen from "../screens/LoadingScreen/LoadingScreen";

const Navigator = props => {

	// Redux
	const currentPage = useSelector(state => state.reducer.page);

	const RenderPage = () => {
		if      (currentPage === "Home")  return <HomeScreen />
		else if (currentPage === "Loading") return <LoadingScreen />
		else return <h1>Page not found</h1>
	};

	return (
		<div className={`flex-full flex-row w100`}>
			<RenderPage />
			{/* <HomeScreen /> */}
		</div>
	);
};

export default Navigator;