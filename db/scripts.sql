SELECT * FROM react_rpg_db.materials;
SELECT * FROM react_rpg_db.users;
INSERT INTO materials (uid, mat, qty, img_url) VALUES (1, "x", 5, "./") ON DUPLICATE KEY UPDATE qty = qty + 6;
ALTER TABLE materials ADD curr BOOLEAN DEFAULT FALSE after qty;


INSERT INTO materials (uid, mat, qty, curr, img_url) VALUES (1, "Ship", 1, false, "./images/materials/mat_ship.jpg");
SELECT * FROM react_rpg_db.materials;

UPDATE materials SET qty = qty + 1 WHERE userID = "1";
UPDATE materials SET qty = qty + 1 WHERE (userID = "2" AND mat = "gold");


CREATE TABLE users (
    id INTEGER NOT NULL AUTO_INCREMENT,
    uid int(10) NOT NULL,
	username VARCHAR(14) NOT NULL,
    level int(4) NOT NULL DEFAULT 1,
    exp int(10) NOT NULL DEFAULT 1,
    gold int(6) NOT NULL DEFAULT 0,
    diamond int(3) NOT NULL DEFAULT 0,
    ticket int(3) NOT NULL DEFAULT 0,
    fastForward int(3) NOT NULL DEFAULT 0,
    
    PRIMARY KEY (id)
);

SELECT * FROM react_rpg_db.users;
INSERT INTO users (uid, username) VALUES (1, "MEGABUTT");

CREATE TABLE quests (
	id INTEGER NOT NULL AUTO_INCREMENT,
    uid int(10) NOT NULL,
	questName VARCHAR(100) NOT NULL,
    isHeroQuest BOOLEAN NOT NULL,
    startTime int(255) NOT NULL,
    endTime int(255) NOT NULL,
    lootObj VARCHAR(10000) NOT NULL,
    
    PRIMARY KEY (id)
);

CREATE TABLE items (
	id INTEGER NOT NULL AUTO_INCREMENT,
    uid INTEGER(10) NOT NULL DEFAULT 1,
	name VARCHAR(12) NOT NULL DEFAULT "",
	type VARCHAR(100) NOT NULL DEFAULT "",
	img_url VARCHAR(100) NOT NULL DEFAULT "",
	level INTEGER(3) NOT NULL DEFAULT 1,
    exp INTEGER(10) NOT NULL DEFAULT 1,
    
    speed INTEGER(5) NOT NULL DEFAULT 0,
	power INTEGER(5) NOT NULL DEFAULT 0,
	luck INTEGER(5) NOT NULL DEFAULT 0,
	wisdom INTEGER(5) NOT NULL DEFAULT 0,

    PRIMARY KEY (id)
);

SELECT * FROM react_rpg_db.items;

INSERT INTO react_rpg_db.items 
(uid, name, type, img_url, level, exp, Speed, Power, Luck, Wisdom) 
VALUES 
(1, "Sword", "Sword", "./images/materials/curr_silver.jpg", 1, 1, 1, 1, 0, 0);

INSERT INTO react_rpg_db.items 
(uid, name, type, img_url, level, exp, Speed, Power, Luck, Wisdom) 
VALUES 
(1, "Trinket", "Trinket", "./images/materials/curr_bronze.jpg", 1, 1, 0, 0, 1, 1);








ALTER TABLE materials ADD COLUMN img_url VARCHAR(100) NOT NULL AFTER qty;

DELETE FROM materials WHERE mat = "Ship";

SELECT mat, qty, img_url FROM react_rpg_db.materials WHERE (uid = 1 AND (mat = "Bronze" OR mat = "Silver" OR mat = "Gold" OR mat = "Mythril"));

SELECT mat, qty, img_url FROM react_rpg_db.materials WHERE (uid = 1 AND (mat != "Bronze" AND mat != "Silver" AND mat != "Gold" AND mat != "Mythril"));

UPDATE materials SET curr = 1 WHERE (mat = "Gold" OR mat = "Silver" OR mat = "Bronze" OR mat = "Mythril");

SELECT * FROM materials WHERE curr = 1;

INSERT INTO users (uid, username, level) VALUES (1, "MEGABUTT", 1);


