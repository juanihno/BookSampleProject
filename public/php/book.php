<?php
header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: GET, POST');

header("Access-Control-Allow-Headers: X-Requested-With");
require('vendor/autoload.php');

use bookstore\Books;

$books = new Books();

$books_results = $books -> getBooks();

echo json_encode( $books_results );

?>