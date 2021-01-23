// React and CSS
import React, { useEffect } from 'react';
import axios from "axios";
import './LoadingScreen.css';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { 
	navigate,
	updateAllCurrencies,
	updateAllMaterials
 } from '../../store/actions/actions';

const LoadingScreen = props => {

	// Redux
	const dispatch = useDispatch();

	useEffect(() => {
		const async = async () => {
			axios.get("/api/getMaterials/1")
			.then(res => {
				console.log("res materials", res);
				dispatch(updateAllCurrencies(res.data.filter(ele => ele.curr === 1)));
				dispatch(updateAllMaterials(res.data.filter(ele => ele.curr === 0)));
				dispatch(navigate("Home"));
			});
		};

		async();
	}, []);

	// COMP
	return <div className='loadingScreen'></div>
};

export default LoadingScreen;