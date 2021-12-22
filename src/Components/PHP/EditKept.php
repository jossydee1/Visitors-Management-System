<?php

require 'connect.php';
include_once("Core.php");


// if (isset($_GET['id'])) 
// {
    $id = ($_GET['id']);
// $id = isset($_GET['id']) ? $_GET['id'] : "";

//Get by id
$sql = "SELECT * FROM `visitors` WHERE `id` ='{$id}' LIMIT 1";

$result = mysqli_query($con,$sql);
$row = mysqli_fetch_assoc($result);
// print_r($row)

echo $json = json_encode($row);
// echo json_encode(['data'=>$json]);

// if(mysqli_num_rows($result) > 0)
// {
//     foreach($result as $row)
//     {
//         echo $row['lastName'];
//         //  $row = mysqli_fetch_assoc($result);
//     }
// }
// else
// {
//     echo 'No record';
// }
// }
exit;


