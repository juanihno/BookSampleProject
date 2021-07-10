<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');

$http_origin = $_SERVER['HTTP_ORIGIN'];

$allowed_domains = array(
  'http://localhost:3000',
  'http://localhost',
);

if (in_array($http_origin, $allowed_domains))
{  
    // header("Access-Control-Allow-Origin: $http_origin");
    // header('Content-Type: application/json');
}

require('vendor/autoload.php');

use bookstore\Books;

$books = new Books();

$books_results = $books -> getBooks();

echo json_encode( $books_results );

?>