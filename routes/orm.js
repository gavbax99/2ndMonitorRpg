// Import MySQL connection.
var connection = require("./connection.js");

// Helper function for SQL syntax - formats "?" better: ["?", "?", "?"].toString() => "?,?,?";
function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
};

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];

    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        var value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
            // e.g. {sleepy: true} => ["sleepy=true"]
            arr.push(key + "=" + value);
        }
    }
    // translate array of strings to a single comma-separated string
    return arr.toString();
};

// ORM Object with MySQL methods
// =============================
var orm = {

    // EXAMPLE METHOD
    // selectOne: (tableName, id, cb) => {
    //     var queryString = "SELECT * FROM " + tableName + " WHERE id = " + id;

    //     connection.query(queryString, function (err, res) {
    //         if (err) throw err;
    //         cb(res);
    //     });
    // },

    // Grab all currencies
    getCurrencies: (uid, cb) => {
		var queryString = `SELECT mat, qty, img_url FROM react_rpg_db.materials WHERE (uid = ${uid} AND (mat = "Bronze" OR mat = "Silver" OR mat = "Gold" OR mat = "Mythril"))`;

        connection.query(queryString, function (err, res) {
            if (err) throw err;
            cb(res);
        });
    },

    // Grab all materials
    getMaterials: (uid, cb) => {
		var queryString = `SELECT * FROM react_rpg_db.materials WHERE uid = ${uid};`;
		// var queryString = `SELECT * FROM react_rpg_db.materials WHERE (uid = ${uid} AND (mat != "Bronze" AND mat != "Silver" AND mat != "Gold" AND mat != "Mythril"))`;

        connection.query(queryString, function (err, res) {
            if (err) throw err;
            cb(res);
        });
    },

    // Grab all quests
    getQuests: (uid, cb) => {
		var queryString = `SELECT * FROM react_rpg_db.quests WHERE uid = ${uid};`;

        connection.query(queryString, function (err, res) {
            if (err) throw err;
            cb(res);
        });
	},
	
	// Initiates a quest
	startQuest: (uid, questName, isHeroQuest, startTime, endTime, lootObj, cb) => {
		var queryString = `INSERT INTO react_rpg_db.quests (uid, questName, isHeroQuest, startTime, endTime, lootObj) VALUES (${uid}, "${questName}", ${isHeroQuest}, ${startTime}, ${endTime}, "${lootObj}");`;

        connection.query(queryString, function (err, res) {
            if (err) throw err;
            cb(res);
        });
	},

	// Removes a quest
	removeQuest: (id, cb) => {
		var queryString = `DELETE FROM react_rpg_db.quests WHERE id = ${id};`;

		connection.query(queryString, function (err, res) {
            if (err) throw err;
            cb(res);
        });
	},

    // Update single material
    updateMaterial: (uid, mat, qty, img_url, cb) => {
		var queryString = `INSERT INTO react_rpg_db.materials (uid, mat, qty, img_url) VALUES (${uid}, "${mat}", ${qty}, "${img_url}") ON DUPLICATE KEY UPDATE qty = qty + ${qty};`;

        connection.query(queryString, function (err, res) {
            if (err) throw err;
            cb(res);
        });
    }
    
};
// =============================

// Export the orm object
module.exports = orm;