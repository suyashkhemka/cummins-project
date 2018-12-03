<?php

class SensorTimeSeries
{
  public $sensorDeployedId;
  public $dataCollectedDate;
  public $output;
  public $heartRate;
  public $compressorEfficiency;
  public $availability;
  public $reliability;
  public $firedHours;
  public $trips;
  public $starts;


  public function __construct($row) {
    $this->sensorDeployedId = isset($row['sensorDeployedId']) ? intval($row['sensorDeployedId']) : null;

    $this->dataCollectedDate = $row['dataCollectedDate'];

    $this->output = floatval($row['output']);
    $this->heartRate = floatval($row['heartRate']);
    $this->compressorEfficiency = floatval($row['compressorEfficiency']);
    $this->availability = floatval($row['availability']);
    $this->reliability = floatval($row['reliability']);
    $this->firedHours = floatval($row['firedHours']);
    $this->trips = intval($row['trips']);
    $this->starts = intval($row['starts']);
  }

  public function create() {
    $db = new PDO(DB_SERVER, DB_USER, DB_PW);

    $sql = 'INSERT sensorTimeSeries (sensorDeployedId, dataCollectedDate, output, heartRate, compressorEfficiency, availability, reliability, firedHours, trips, starts)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

    $statement = $db->prepare($sql);
    $success = $statement->execute([
      //$this->clientId,
      $this->sensorDeployedId,
      $this->dataCollectedDate,
      $this->output,
      $this->heartRate,
      $this->compressorEfficiency,
      $this->availability,
      $this->reliability,
      $this->firedHours,
      $this->trips,
      $this->starts
    ]);

    $this->id = $db->lastInsertId();
  }

  public static function getDataByDeployedId(int $sensorDeployedId) {
    // 1. Connect to the database
    $db = new PDO(DB_SERVER, DB_USER, DB_PW);

    // 2. Prepare the query
    $sql = 'SELECT * FROM sensorTimeSeries WHERE sensorDeployedId = ?';

    $statement = $db->prepare($sql);

    // 3. Run the query
    $success = $statement->execute(
        [$sensorDeployedId]
    );

    // 4. Handle the results
    $arr = [];
    while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
      // 4.a. For each row, make a new work object
      $sensorTimeSeriesItem =  new SensorTimeSeries($row);

      array_push($arr, $sensorTimeSeriesItem);
    }
    // 4.b. return the array of work objects
    return $arr;
  }

  public static function fetchAll() {
    // 1. Connect to the database
    $db = new PDO(DB_SERVER, DB_USER, DB_PW);

    // 2. Prepare the query
    $sql = 'SELECT * FROM sensorTimeSeries';
    $statement = $db->prepare($sql);

    // 3. Run the query
    $success = $statement->execute();

    // 4. Handle the results
    $arr = [];
    while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
      $timeSeries =  new SensorTimeSeries($row);
      array_push($arr, $timeSeries);
    }

    return $arr;
  }

  public static function getDataByTurbineId(int $turbineId) {
            // 1. Connect to the database
            $db = new PDO(DB_SERVER, DB_USER, DB_PW);

            // 2. Prepare the query
            $sql = 'SELECT sts.* FROM 
            sensorTimeSeries as sts, sensorDeployed as sd, turbineDeployed as td, turbine as t 
            WHERE t.turbineId=? AND t.turbineId=td.turbineId AND td.turbineDeployedId = sd.turbineDeployedId AND sd.sensorDeployedId = sts.sensorDeployedId;';
        
            $statement = $db->prepare($sql);
        
            // 3. Run the query
            $success = $statement->execute(
                [$turbineId]
            );
        
            // 4. Handle the results
            $arr = [];
            while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
              // 4.a. For each row, make a new work object
              $sensorDataItem =  new SensorTimeSeries($row);
        
              array_push($arr, $sensorDataItem);
            }
        
            // 4.b. return the array of work objects
        
            return $arr;
  }
}