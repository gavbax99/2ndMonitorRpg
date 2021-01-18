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
    selectOne: (tableName, id, cb) => {
        var queryString = "SELECT * FROM " + tableName + " WHERE id = " + id;

        connection.query(queryString, function (err, res) {
            if (err) throw err;
            cb(res);
        });
    },

    // Update single material
    updateMaterial: (userID, mat, qty, cb) => {
		var queryString = `UPDATE materials SET qty = qty + ${qty} WHERE (uid = "${userID}" AND mat = "${mat}")`;

        connection.query(queryString, function (err, res) {
            if (err) throw err;
            cb(res);
        });
    }
    
};
// =============================

// Export the orm object
module.exports = orm;