import axios from 'axios';

export const updateMaterial = (uid, mat, qty, img_url) => {
	axios.put("/api/updateMaterial/", {uid: uid, mat: mat, qty: qty, img_url: img_url})
	.then((res) => {
		console.log(res);
	});
};