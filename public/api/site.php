<?php

require '../../app/common.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST'){

$site = new Site($_POST);
$site->create();
echo json_encode($site);
exit;
}

// // 1. Go to the database and get all teams
// $site = Site::fetchAll();
// // 2. Convert to JSON
// $json = json_encode($site, JSON_PRETTY_PRINT);

$clientId = intval($_GET['clientId'] ?? 0);

if ($clientId < 1) {
  throw new Exception('Invalid Task ID');
}


// 1. Go to the database and get all work associated with the $taskId
$siteArr = Site::getSiteByClientId($clientId);

$json = json_encode($siteArr, JSON_PRETTY_PRINT);

// 3. Print
header('Content-Type: application/json');
echo $json;
