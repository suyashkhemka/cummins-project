<?php

class TurbineDeployed
{
  public $turbineDeployedId;
  public $turbineId;
  public $siteId;
  public $serialNumber;
  public $deployedDate;
  public $totalFiredHours;
  public $totalStarts;
  public $lastPlannedOutageDate;
  public $lastUnplannedOutageDate;


  public function __construct($row) {
    $this->turbineDeployedId = isset($row['turbineDeployedId']) ? intval($row['turbineDeployedId']) : null;
    $this->turbineId = intval($row['turbineId']);
    $this->siteId = intval($row['siteId']);
    $this->serialNumber =  $row['serialNumber'];
    $this->deployedDate =  $row['deployedDate'];
    $this->totalFiredHours =  intval($row['totalFiredHours']);
    $this->totalStarts =  intval($row['totalStarts']);
    $this->lastPlannedOutageDate =  $row['lastPlannedOutageDate'];
    $this->lastUnplannedOutageDate =  $row['lastUnplannedOutageDate'];
  }

  public function create() {
//INSERT turbine(turbineId,siteId,serialNumber,deployedDate,totalFiredHours,totalStarts,lastPlannedOutageDate,lastUnplannedOutageDate) VALUES (1,1,"9HA-01-IU0008","2016-07-01",3543,5,"2016-06-01","0000-00-00");
    $db = new PDO(DB_SERVER, DB_USER, DB_PW);
    $sql = 'INSERT turbineDeployed(turbineId,siteId,serialNumber,deployedDate,totalFiredHours,totalStarts,lastPlannedOutageDate,lastUnplannedOutageDate)
            VALUES (?,?,?,?,?,?,?,?)';
    $statement = $db->prepare($sql);
    $success = $statement->execute([
      $this->turbineId,
      $this->siteId,
      $this->serialNumber,
      $this->deployedDate,
      $this->totalFiredHours,
      $this->totalStarts,
      $this->lastPlannedOutageDate,
      $this->lastUnplannedOutageDate
    ]);
    $this->turbineDeployedId = $db->lastInsertId();
    if (!$success) {
      //TODO: Better error handling
      die ('Bad SQL in turbine on insert');
    }

  }

  public static function fetchAll() {
    // 1. Connect to the database
    $db = new PDO(DB_SERVER, DB_USER, DB_PW);

    // 2. Prepare the query
    $sql = 'SELECT * FROM turbineDeployed';
    $statement = $db->prepare($sql);

    // 3. Run the query
    $success = $statement->execute();

    // 4. Handle the results
    $arr = [];
    while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
      $theTurbineDeployed =  new TurbineDeployed($row);
      array_push($arr, $theTurbineDeployed);
    }

    return $arr;
  }

  public static function getTurbineDeployedBySiteId(int $siteId) {
    // 1. Connect to the database
    $db = new PDO(DB_SERVER, DB_USER, DB_PW);

    // 2. Prepare the query
    $sql = 'SELECT * FROM turbineDeployed WHERE siteId = ?';

    $statement = $db->prepare($sql);

    // 3. Run the query
    $success = $statement->execute(
        [$siteId]
    );

    // 4. Handle the results
    $arr = [];
    while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
      // 4.a. For each row, make a new work object
      $turbineDeployedItem =  new TurbineDeployed($row);

      array_push($arr, $turbineDeployedItem);
    }
    // 4.b. return the array of work objects
    return $arr;
  }


}
