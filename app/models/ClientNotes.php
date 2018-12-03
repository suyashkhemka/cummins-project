<?php

class ClientNotesModel
{
  public $clientNoteId;
  public $clientId;
  public $clientNote;


  public function __construct($row) {
    $this->clientNoteId = isset($row['clientNoteId']) ? intval($row['clientNoteId']) : null;
    $this->clientId = isset($row['clientId']) ? intval($row['clientId']) : null;
    $this->clientNote = $row['clientNote'];
  }

  public function create() {

    $db = new PDO(DB_SERVER, DB_USER, DB_PW);
    $sql = 'INSERT INTO clientNotes (clientId, clientNote)
            VALUES (?,?)';
    $statement = $db->prepare($sql);
    $success = $statement->execute([
      $this->clientId,
      $this->clientNote,
    ]);

    $this->clientNoteId = $db->lastInsertId();
    if (!$success) {
      //TODO: Better error handling
      die ('Bad SQL in site on insert');
    }

  }

  public static function fetchAll() {
    // 1. Connect to the database
    $db = new PDO(DB_SERVER, DB_USER, DB_PW);

    // 2. Prepare the query
    $sql = 'SELECT * FROM site';
    $statement = $db->prepare($sql);

    // 3. Run the query
    $success = $statement->execute();

    // 4. Handle the results
    $arr = [];
    while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
      $theClientNote =  new ClientNotesModel($row);
      array_push($arr, $theClientNote);
    }

    return $arr;
  }

  public static function getNotesByClientId(int $clientId) {
        // 1. Connect to the database
        $db = new PDO(DB_SERVER, DB_USER, DB_PW);

        // 2. Prepare the query
        $sql = 'SELECT * FROM clientNotes WHERE clientId = ?';
    
        $statement = $db->prepare($sql);
    
        // 3. Run the query
        $success = $statement->execute(
            [$clientId]
        );
    
        // 4. Handle the results
        $arr = [];
        while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
          // 4.a. For each row, make a new work object
          $clientNoteItem =  new ClientNotesModel($row);
    
          array_push($arr, $clientNoteItem);
        }
    
        // 4.b. return the array of work objects
    
        return $arr;
  }

  public static function deleteClientNoteById(int $clientId) {
            // 1. Connect to the database
            $db = new PDO(DB_SERVER, DB_USER, DB_PW);

            // 2. Prepare the query
            $sql = 'DELETE FROM clientNotes WHERE clientNoteId = ?';
        
            $statement = $db->prepare($sql);
        
            // 3. Run the query
            $success = $statement->execute(
                [$clientId]
            );
        
            // 4. Handle the results
            $arr = [];
            while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
              // 4.a. For each row, make a new work object
              $clientNoteItem =  new ClientNotesModel($row);
        
              array_push($arr, $clientNoteItem);
            }
        
            // 4.b. return the array of work objects
        
            return $arr;
  }

}
