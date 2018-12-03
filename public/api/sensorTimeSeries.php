<?php

require '../../app/common.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $timeSeries = new SensorTimeSeries($_POST);

  $timeSeries->create();
  
  echo json_encode($timeSeries);
  exit;
}


$turbineId = intval($_GET['turbineId'] ?? 0);

if ($turbineId < 1) {
  throw new Exception('Invalid Turbine ID');
}


// 1. Go to the database and get all work associated with the $taskId
$sensorTimeSeriesArr = SensorTimeSeries::getDataByTurbineId($turbineId);

$json = json_encode($sensorTimeSeriesArr, JSON_PRETTY_PRINT);

// 3. Print
header('Content-Type: application/json');
echo $json;