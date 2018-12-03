<?php

require '../../app/common.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $sensor = new Sensor($_POST);
  $sensor->create();
  echo json_encode($sensor);
  exit;
}

// 1. Goto the database and get all work associated with $taskId
$sensorArr = Sensor::fetchAll();

// 2. Conver to JSON
$json = json_encode($sensorArr, JSON_PRETTY_PRINT);

// 3. Print
header('Content-Type: application/json');
echo $json;
