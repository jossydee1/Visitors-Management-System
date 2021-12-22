<?php
include_once("Core.php");
require 'connect.php';

//Get the posted data
$postdata = file_get_contents("php://input");



if(isset($postdata) && !empty($postdata))

{
    // Extract the data
    $request = json_decode($postdata);

    print_r($request);

    // Sanitize
    $id = $_GET['id'];
    $lastName= $request -> lastName;
    $timeOut = $request -> $timeOut
    
    // Update
    $sql = "UPDATE `visitors` SET `lastName` = '$lastName', `timeOut` = '$timeOut' WHERE `id` = '{$id}' LIMIT 1";

        if(mysqli_query($con, $sql))
        {
            http_response_code(201);
        }
        else
        {
            http_response_code(422);
        }
}
