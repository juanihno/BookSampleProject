<?php
require('vendor/autoload.php');

use bookstore\Books;

$books = new Books();

$books_results = $books -> getBooks();

echo json_encode( $books_results );

?>