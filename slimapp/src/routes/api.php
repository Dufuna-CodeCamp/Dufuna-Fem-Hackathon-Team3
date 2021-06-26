<?php

use \Psr\Http\Message\ResponseInterface as Response;
use \Psr\Http\Message\ServerRequestInterface as Request;


$app = new \Slim\App;

$app->get('/', function (Request $request, Response $reponse) {
    echo 'Inventory Management System working';
});


//add a category
$app->post('/api/categories/add', function (Request $request, Response $reponse, array $args) {

    $category_name = $request->getParam('category_name');
    $created_by = $request->getParam('created_by');
    $created_at = date('Y-m-d H:i:s'); 


    try {
        //get db object
        $db = new db();
        //conncect
        $pdo = $db->connect();


        $sql = "INSERT INTO categories (category_name, created_by, created_at) VALUES (?,?,?)";


        $pdo->prepare($sql)->execute([$category_name, $created_by, $created_at]);

        echo '{"notice": {"text": "category added"}}';
        $pdo = null;
    } catch (\PDOException $e) {
        echo '{"error": {"text": ' . $e->getMessage() . '}}';
    }
});

//edit a category
$app->put('/api/categories/update/{id}', function (Request $request, Response $reponse, array $args) {
    
    $id = $request->getAttribute('id');

    $category_name = $request->getParam('category_name');
    $created_by = $request->getParam('created_by');
    $created_at = date('Y-m-d H:i:s');

    try {
        //get db object
        $db = new db();
        //conncect
        $pdo = $db->connect();


        $sql = "UPDATE  categories SET category_name =?, created_by=?, created_at=? WHERE id=?";


        $pdo->prepare($sql)->execute([$category_name, $created_by, $created_at, $id]);

        echo '{"notice": {"text": "category updated successfully"}}';
        $pdo = null;
    } catch (\PDOException $e) {
        echo '{"error": {"text": ' . $e->getMessage() . '}}';
    }
});


//add an inventory
$app->post('/api/inventories/add', function (Request $request, Response $reponse, array $args) {

    $product_name = $request->getParam('product_name');
    $quantity = $request->getParam('quantity');
    $created_by = $request->getParam('created_by');
    $created_at = date('Y-m-d H:i:s'); 


    try {
        //get db object
        $db = new db();
        //conncect
        $pdo = $db->connect();


        $sql = "INSERT INTO inventories (product_name, quantity, created_by, created_at) VALUES (?,?,?, ?)";


        $pdo->prepare($sql)->execute([$product_name, $quantity, $created_by, $created_at]);

        echo '{"notice": {"text": "inventory added"}}';
        $pdo = null;
    } catch (\PDOException $e) {
        echo '{"error": {"text": ' . $e->getMessage() . '}}';
    }
});

//edit an inventory
$app->put('/api/inventories/update/{id}', function (Request $request, Response $reponse, array $args) {
    
    $id = $request->getAttribute('id');

    $product_name = $request->getParam('product_name');
    $quantity = $request->getParam('quantity');
    $created_by = $request->getParam('created_by');
    $created_at = date('Y-m-d H:i:s');

    try {
        //get db object
        $db = new db();
        //conncect
        $pdo = $db->connect();


        $sql = "UPDATE  categories SET product_name =?, quantity =?, created_by=?, created_at=? WHERE id=?";


        $pdo->prepare($sql)->execute([$product_name, $quantity, $created_by, $created_at, $id]);

        echo '{"notice": {"text": "inventory updated successfully"}}';
        $pdo = null;
    } catch (\PDOException $e) {
        echo '{"error": {"text": ' . $e->getMessage() . '}}';
    }
});

//add a vendor
$app->post('/api/vendors/add', function (Request $request, Response $reponse, array $args) {

    $vendor_name = $request->getParam('vendor_name');
    $phone = $request->getParam('phone');
    $email = $request->getParam('email');
    $address = $request->getParam('address'); 


    try {
        //get db object
        $db = new db();
        //conncect
        $pdo = $db->connect();


        $sql = "INSERT INTO vendors (vendor_name, phone, email, address) VALUES (?,?,?,?)";


        $pdo->prepare($sql)->execute([$vendor_name, $phone, $email, $address]);

        echo '{"notice": {"text": "vendor added"}}';
        $pdo = null;
    } catch (\PDOException $e) {
        echo '{"error": {"text": ' . $e->getMessage() . '}}';
    }
});

//edit a vendor
$app->put('/api/vendors/update/{id}', function (Request $request, Response $reponse, array $args) {
    
    $id = $request->getAttribute('id');

    $vendor_name = $request->getParam('vendor_name');
    $phone = $request->getParam('phone');
    $email = $request->getParam('email');
    $address = $request->getParam('address'); 


    try {
        //get db object
        $db = new db();
        //conncect
        $pdo = $db->connect();


        $sql = "UPDATE  categories SET product_name =?, quantity =?, created_by=?, created_at=? WHERE id=?";


        $pdo->prepare($sql)->execute([$pvendor_name, $phone, $email, $address, $id]);

        echo '{"notice": {"text": "vendor updated successfully"}}';
        $pdo = null;
    } catch (\PDOException $e) {
        echo '{"error": {"text": ' . $e->getMessage() . '}}';
    }
});

 


$app->run();
