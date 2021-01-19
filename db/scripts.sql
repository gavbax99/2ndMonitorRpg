SELECT * FROM react_rpg_db.materials;
SELECT * FROM react_rpg_db.users;

INSERT INTO materials (uid, mat, qty, img_url) VALUES (1, "bronze", 1, "./");

UPDATE materials SET qty = qty + 1 WHERE userID = "1";

UPDATE materials SET qty = qty + 1 WHERE (userID = "2" AND mat = "gold");


CREATE TABLE users (
    id INTEGER NOT NULL AUTO_INCREMENT,
    uid int(10) NOT NULL,
	username VARCHAR(30) NOT NULL,
    level int(10) NOT NULL DEFAULT 1,
    
    PRIMARY KEY (id)
);

ALTER TABLE materials ADD COLUMN img_url VARCHAR(100) NOT NULL AFTER qty;

INSERT INTO materials (uid, mat, qty, img_url) VALUES (1, "x", 5, "./") ON DUPLICATE KEY UPDATE qty = qty + 6;

DELETE FROM materials WHERE uid = 1;

SELECT mat, qty, img_url FROM react_rpg_db.materials WHERE (uid = 1 AND (mat = "Bronze" OR mat = "Silver" OR mat = "Gold" OR mat = "Mythril"));

SELECT mat, qty, img_url FROM react_rpg_db.materials WHERE (uid = 1 AND (mat != "Bronze" AND mat != "Silver" AND mat != "Gold" AND mat != "Mythril"));
