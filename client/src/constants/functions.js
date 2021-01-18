import axios from 'axios';

export const increaseMaterial = (uid, mat, qty) => {
	axios.put("/api/updateMaterial/", {uid: uid, mat: mat, qty: qty})
	.then((res) => {
		console.log(res);
	});
};

export const addSilver = () => {
	
}