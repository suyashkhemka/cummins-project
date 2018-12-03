<?php

require '../../app/common.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST'){

$clientNotes = new ClientNotesModel($_POST);
$clientNotes->create();
echo json_encode($clientNotes);
exit;
}

if ($_SERVER['REQUEST_METHOD'] == 'DELETE'){
  $clientId = intval($_GET['clientId'] ?? 0);

  if ($clientId < 1) {
    throw new Exception('Invalid Client ID');
  }

  $clientNotes = ClientNotesModel::deleteClientNoteById($clientId);
  echo json_encode($clientNotes);
  exit;
}

// // 1. Go to the database and get all teams
// $site = Site::fetchAll();
// // 2. Convert to JSON
// $json = json_encode($site, JSON_PRETTY_PRINT);

$clientId = intval($_GET['clientId'] ?? 0);

if ($clientId < 1) {
  throw new Exception('Invalid Client ID');
}


// 1. Go to the database and get all work associated with the $taskId
$clientNotesArr = ClientNotesModel::getNotesByClientId($clientId);

$json = json_encode($clientNotesArr, JSON_PRETTY_PRINT);

// 3. Print
header('Content-Type: application/json');
echo $json;
