<?php

class Turbine
{
  public $turbineId;
  public $turbineName;
  public $turbineDescription;
  public $capacity;
  public $rampUpTime;
  public $maintenanceInterval;

  public function __construct($row) {
    $this->turbineId = isset($row['turbineId']) ? intval($row['turbineId']) : null;
    $this->turbineName = $row['turbineName'];
    $this->turbineDescription = $row['turbineDescription'];
    $this->capacity =  intval($row['capacity']);
    $this->rampUpTime =  intval($row['rampUpTime']);
    $this->maintenanceInterval =  intval($row['maintenanceInterval']);
  }

  public function create() {

    $db = new PDO(DB_SERVER, DB_USER, DB_PW);
    $sql = 'INSERT turbine(turbineName,turbineDescription,capacity,rampUpTime,maintenanceInterval)
            VALUES (?,?,?,?,?)';
    $statement = $db->prepare($sql);
    $success = $statement->execute([
      $this->turbineName,
      $this->turbineDescription,
      $this->capacity,
      $this->rampUpTime,
      $this->maintenanceInterval
    ]);
    $this->turbineId = $db->lastInsertId();
    if (!$success) {
      //TODO: Better error handling
      die ('Bad SQL in turbine on insert');
    }

  }

  public static function fetchAll() {
    // 1. Connect to the database
    $db = new PDO(DB_SERVER, DB_USER, DB_PW);

    // 2. Prepare the query
    $sql = 'SELECT * FROM turbine';
    $statement = $db->prepare($sql);

    // 3. Run the query
    $success = $statement->execute();

    // 4. Handle the results
    $arr = [];
    while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
      $theTurbine =  new Turbine($row);
      array_push($arr, $theTurbine);
    }

    return $arr;
  }

}
