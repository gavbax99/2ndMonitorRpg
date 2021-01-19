// Require models.js file
var orm = require('./orm.js');

// Require express and build our router instance
var express = require("express");
var router = express.Router();

// API ROUTES 
// *************************************************

// router.get("/api/selectone", function (req, res) {
//     orm.selectOne(
//         "test_table",
//         1,
//         function (result) {
// 			console.log("result", result)
//             res.json(result);
//         }
//     );
// });

// GET CURRENCIES
router.get("/api/getCurrencies/:uid", function (req, res) {
    orm.getCurrencies(
        req.params.uid,
        function (result) {
			console.log("result", result)
            res.json(result);
        }
    );
});

// GET MATERIALS
router.get("/api/getMaterials/:uid", function (req, res) {
    orm.getMaterials(
        req.params.uid,
        function (result) {
			console.log("result", result)
            res.json(result);
        }
    );
});

// UPDATE A SINGLE MATERIAL OR CURRENCY
router.put("/api/updateMaterial/", function (req, res) {
    orm.updateMaterial(
		req.body.uid,
		req.body.mat,
		req.body.qty,
		req.body.img_url,
        function (result) {
			console.log("result", result)
            res.json(result);
        }
    );
});

// EXPORT OUR ROUTER
module.exports = router;
