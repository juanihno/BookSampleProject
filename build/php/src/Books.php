<?php
namespace bookstore;

use bookstore\Database;

class Books extends Database {

  public function __construct() {
    parent::__construct();
  }

  public function getBooks() {
    if( !$this -> connection ) {
      echo "error";
      exit();
    }
    $query = "SELECT * FROM book";
    $statement = $this -> connection -> prepare($query);
    if( $statement -> execute() == false ) {
      echo "query or database error";
    }
    else {
      $result = $statement -> get_result();
      $books = array();
      // loop through the result to add each book
      // row represents a row in the book table
      // fetch_assoc() converts a row into an associative array
      // example ["book_id" => 1, "book_title" => "Save the Cat!"]
      while( $row = $result -> fetch_assoc() ) {
        array_push( $books, $row );
      }
      return $books;
    }
  }
}
?>