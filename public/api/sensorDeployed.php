<?php

require '../../app/common.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $sensorDeployed = new SensorDeployed($_POST);
  $sensorDeployed->create();
  echo json_encode($sensorDeployed);
  exit;
}

// 1. Goto the database and get all work associated with $taskId
$sensorDeployedArr = SensorDeployed::fetchAll();

// 2. Conver to JSON
$json = json_encode($sensorDeployedArr, JSON_PRETTY_PRINT);

// 3. Print
header('Content-Type: application/json');
echo $json;
