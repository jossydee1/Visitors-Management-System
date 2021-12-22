<?php
include_once("Core.php");
require 'connect.php';

$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
    $request = json_decode($postdata);

    //Sanitize
    $firstName = $request -> firstName;
    $lastName = $request -> lastName;
    $phoneNumber = $request -> phoneNumber;
    $email = $request -> email;
    $contactPerson = $request -> contactPerson;
    $department = $request -> department;
    $purpose = $request -> purpose;
    $companyName = $request -> companyName;
    $address = $request -> address;
    $telNumber = $request -> telNumber;
    $vehicleNumber = $request -> vehicleNumber;
    $driverName = $request -> driverName;
     $cardNumber = $request -> cardNumber;
     $onAppointment = $request -> onAppointment;
     $carryingObject = $request -> carryingObject;
    $timeIn = $request -> timeIn;
    $timeOut = $request -> timeOut;


    //Store
    $sql = "INSERT INTO `visitors`(
        `firstName`,
        `lastName`,
        `phoneNumber`,
        `email`,
        `contactPerson`,
        `department`,
        `purpose`,
        `companyName`,
        `address`,
        `telNumber`,
        `vehicleNumber`,
        `driverName`,
        `cardNumber`,
        `onAppointment`,
        `carryingObject`,
        `timeIn`,
        `timeOut`
        ) VALUES

        ('{$firstName}',
        '{$lastName}',
        '{$phoneNumber}',
        '{$email}',
        '{$contactPerson}',
        '{$department}',
        '{$purpose}', 
        '{$companyName}',
        '{$address}',
        '{$telNumber}',
        '{$vehicleNumber}',
        '{$driverName}',
        '{$cardNumber}',
        '{$onAppointment}',
         '{$carryingObject}',
        '{$timeIn}',
        '{$timeOut}'
        )
        ";

        if(mysqli_query($con,$sql))
        {
            http_response_code(201);
        }
        else
        {
            http_response_code(422);
        }
}