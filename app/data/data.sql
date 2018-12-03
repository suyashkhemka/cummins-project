drop table if exists sensorTimeSeries;
drop table if exists sensorDeployed;
drop table if exists turbineDeployed;
drop table if exists turbine;
drop table if exists site;
drop table if exists client;
drop table if exists sensor;
drop table if exists clientNotes;

CREATE TABLE sensor (
	sensorId INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	sensorName VARCHAR(100) NOT NULL,
	sensorDescription VARCHAR(256) NOT NULL,
	manufacturer VARCHAR(100) NOT NULL,
	totalLifeExpectancy INT NOT NULL
);

CREATE TABLE client (
	clientId INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	clientName VARCHAR(50) NOT NULL,
	clientDescription TEXT NOT NULL,
	gicsSector VARCHAR(50) NOT NULL,
	gicsSubIndustry VARCHAR(50) NOT NULL,
	headquarters VARCHAR(50) NOT NULL
);

CREATE TABLE clientNotes (
  clientNoteId INT PRIMARY KEY AUTO_INCREMENT,
  clientId INT NOT NULL,
  clientNote TEXT NOT NULL,
  FOREIGN KEY (clientId) references client(clientId)
);

CREATE TABLE site (
siteId INT AUTO_INCREMENT NOT NULL,
clientId INT NOT NULL,
siteName VARCHAR(36) NOT NULL,
siteDescription TEXT NOT NULL,
primaryContact VARCHAR(36) NOT NULL,
capacity INT NOT NULL,
commercialDate DATE NOT NULL,
addrLine1 VARCHAR(256) NOT NULL,
addrLine2 VARCHAR(36),
addrCity VARCHAR(36) NOT NULL,
addrState VARCHAR(2) NOT NULL,
addrZip VARCHAR(5) NOT NULL,
addrCountry VARCHAR(36) NOT NULL,
PRIMARY KEY (siteId),
FOREIGN KEY (clientId) REFERENCES client(clientId)
);


CREATE TABLE turbine (
  turbineId INT AUTO_INCREMENT NOT NULL,
  turbineName TEXT NOT NULL,
  turbineDescription TEXT NOT NULL,
  capacity INT NOT NULL,
  rampUpTime INT NOT NULL,
  maintenanceInterval INT NOT NULL,
  PRIMARY KEY (turbineId)
);



CREATE TABLE turbineDeployed (
  turbineDeployedId INT AUTO_INCREMENT NOT NULL,
  turbineId INT NOT NULL,
  siteId INT NOT NULL,
  serialNumber TEXT NOT NULL,
  deployedDate TEXT NOT NULL,
  totalFiredHours INT NOT NULL,
  totalStarts INT NOT NULL,
  lastPlannedOutageDate TEXT NOT NULL,
  lastUnplannedOutageDate TEXT,
  PRIMARY KEY (turbineDeployedId),
  FOREIGN KEY (turbineId) REFERENCES turbine(turbineId),
  FOREIGN KEY (siteId) REFERENCES site(siteId)

);


CREATE TABLE sensorDeployed (
	sensorDeployedId INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	sensorId INT NOT NULL,
	turbineDeployedId INT NOT NULL,
	serialNumber VARCHAR(50),
	deployedDate TEXT NOT NULL,
	FOREIGN KEY (sensorId) REFERENCES sensor(sensorId),
	FOREIGN KEY (turbineDeployedId) REFERENCES turbineDeployed(turbineDeployedId)
);

drop table if exists sensorTimeSeries;

create table sensorTimeSeries (
sensorDeployedId int not null,
dataCollectedDate TEXT not null,
output decimal(10,7) not null,
heartRate decimal(10,6) not null,
compressorEfficiency decimal(10,8) not null,
availability decimal(10,8) not null,
reliability decimal(10,8) not null,
firedHours decimal(10,8) not null,
trips binary not null,
starts binary not null,
foreign key (sensorDeployedId)  references sensorDeployed(sensorDeployedId)
);​

LOAD DATA LOCAL INFILE  '/var/www/group-project-team-16/app/data/sensor.csv' INTO TABLE sensor FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"'  LINES TERMINATED BY '\n' IGNORE 1 LINES;
LOAD DATA LOCAL INFILE  '/var/www/group-project-team-16/app/data/client.csv' INTO TABLE client FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"'  LINES TERMINATED BY '\n' IGNORE 1 LINES;
LOAD DATA LOCAL INFILE  '/var/www/group-project-team-16/app/data/site.csv' INTO TABLE site FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"'  LINES TERMINATED BY '\n' IGNORE 1 LINES;
LOAD DATA LOCAL INFILE  '/var/www/group-project-team-16/app/data/turbine.csv' INTO TABLE turbine FIELDS TERMINATED BY ','  OPTIONALLY ENCLOSED BY '"' LINES TERMINATED BY '\n' IGNORE 1 LINES;
LOAD DATA LOCAL INFILE  '/var/www/group-project-team-16/app/data/turbineDeployed.csv' INTO TABLE turbineDeployed FIELDS TERMINATED BY ','  OPTIONALLY ENCLOSED BY '"' LINES TERMINATED BY '\n' IGNORE 1 LINES;
LOAD DATA LOCAL INFILE  '/var/www/group-project-team-16/app/data/sensorDeployed.csv' INTO TABLE sensorDeployed FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"'  LINES TERMINATED BY '\n' IGNORE 1 LINES;
LOAD DATA LOCAL INFILE  '/var/www/group-project-team-16/app/data/sensorTimeSeries.csv' INTO TABLE sensorTimeSeries FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"' LINES TERMINATED BY '\n' IGNORE 1 LINES;
