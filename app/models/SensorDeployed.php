<?php

class SensorDeployed
{
  public $sensorDeployedId;
  public $sensorId;
  public $turbineDeployedId;
  public $serialNumber;
  public $deployedDate;
  public function __construct($row) {
    $this->sensorDeployedId = isset($row['sensorDeployedId']) ? intval($row['sensorDeployedId']) : null;
    $this->sensorId = intval($row['sensorId']);
    $this->turbineDeployedId = intval($row['turbineDeployedId']);
    $this->serialNumber = $row['serialNumber'];
    $this->deployedDate = $row['deployedDate'];
  }

  public static function fetchAll() {
  // 1. Connect to the database
  $db = new PDO(DB_SERVER, DB_USER, DB_PW);
  // 2. Prepare the query
  $sql = 'SELECT * FROM sensorDeployed';
  $statement = $db->prepare($sql);
  // 3. Run the query
  $success = $statement->execute();
  // 4. Handle the results
  $arr = [];
  while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
    $theSensorDeployed =  new SensorDeployed($row);
    array_push($arr, $theSensorDeployed);
  }
  return $arr;
  }

  public function create() {
    $db = new PDO(DB_SERVER, DB_USER, DB_PW);
    $sql = 'INSERT sensorDeployed (sensorId, turbineDeployedId, serialNumber, deployedDate)
            VALUES (?,?,?,?)';
    $statement = $db->prepare($sql);
    $success = $statement->execute([
        $this->sensorId,
        $this->turbineDeployedId,
        $this->serialNumber,
        $this->deployedDate
    ]);
    if (!$success) {
      //TODO: Better error handling
      die ('Bad SQL on insert');
    }
    $this->sensorDeployedId = $db->lastInsertId();

  }

}
