<?php

require '../../app/common.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST'){

$turbineDeployed = new TurbineDeployed($_POST);
$turbineDeployed->create();
echo json_encode($turbineDeployed);
exit;
}
// 1. Go to the database and get all teams
//$turbineDeployed = TurbineDeployed::fetchAll();
// 2. Convert to JSON


$siteId = intval($_GET['siteId'] ?? 0);

if ($siteId < 1) {
  throw new Exception('Invalid Site ID');
}


// 1. Go to the database and get all work associated with the $taskId
$turbineDeployedArr = TurbineDeployed::getTurbineDeployedBySiteId($siteId);


$json = json_encode($turbineDeployedArr, JSON_PRETTY_PRINT);

// 3. Print
header('Content-Type: application/json');
echo $json;
