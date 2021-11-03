SELECT * FROM reno.estados;
SELECT * FROM reno.irr where id_lat = 1802;



SET SQL_SAFE_UPDATES = 0;
SHOW VARIABLES LIKE "secure_file_priv";
LOAD DATA 
INFILE 'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/cidades.CSV'
INTO TABLE estados
CHARACTER SET utf8
FIELDS TERMINATED BY ';' 
IGNORE 1 LINES;

LOAD DATA 
INFILE 'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/tab_irr.csv'
INTO TABLE irr
CHARACTER SET utf8
FIELDS TERMINATED BY ';' 
IGNORE 1 LINES;