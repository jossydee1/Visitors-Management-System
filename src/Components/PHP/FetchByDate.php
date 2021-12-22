<?php
//
include_once("Core.php");
$connect = mysqli_connect ("localhost", "root", "", "new_vms");
$sql = "SELECT * FROM visitors WHERE From_date =<'2021-10-24' AND To_date => '2021-10-25' ORDER BY ID DESC";
$result = mysqli_query($connect, $sql);
$json_array = array();
while($row = mysqli_fetch_assoc($result)){
	$json_array[]=$row;
}
echo json_encode($json_array);
?>




<?php
include_once("Core.php");
require 'connect.php';

$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
    $request = json_decode($postdata);

    //Sanitize
    $startDate = $request -> startDate;
    $endDate = $request -> endDate;
    


    //Store
    $sql = "SELECT `firstName`,
        `lastName`,
        `phoneNumber`,
        `email`,
        `contactPerson`,
        `department`,
        `purpose`,
        `onAppointment`,
        `companyName`,
        `address`,
        `telNumber`,
        `carryingObject`,
        `vehicleNumber`,
        `driverName`,
        `cardNumber`,
        `timeIn`,
        `timeOut` FROM `visitors` WHERE `id` BETWEEN ('{$startDate}') AND ('{$endDate}') ORDER BY `timeIn`";

        if(mysqli_query($con,$sql))
        {
            http_response_code(201);
        }
        else
        {
            http_response_code(422);
        }
}




<?php
include_once("Core.php");
require 'connect.php';

$postdata = file_get_contents("php://input");

if(isset($_GET['startDate']) && isset($_GET['endDate']))
{
    $_GET = json_decode($postdata);

    //Sanitize
    $startDate = $_GET['startDate'];
    $endDate = $_GET['endDate'];

	$query = "SELECT * FROM visitors WHERE timeIn BETWEEN '$startDate' AND '$endDate' ";
	$query_run = mysqli_query($con, $query);

	if(mysqli_num_rows($query_run) > 0)
	{
		http_response_code(201);
	}
	else
	{
		 http_response_code(422);
	}    

}