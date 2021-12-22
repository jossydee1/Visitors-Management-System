<?php

require 'connect.php';
include_once("Core.php");

    $id = ($_GET['id']);


//Get by id
$sql = "SELECT * FROM `visitors` WHERE `id` ='{$id}' LIMIT 1";

$result = mysqli_query($con,$sql);
$row = mysqli_fetch_assoc($result);
// print_r($row)

echo $json = json_encode($row);
// echo json_encode(['data'=>$json]);

exit;


