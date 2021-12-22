<?php
//
include_once("Core.php");
$connect = mysqli_connect ("localhost", "root", "", "new_vms");
$sql = "SELECT * FROM visitors ORDER BY ID DESC";
$result = mysqli_query($connect, $sql);
$json_array = array();
while($row = mysqli_fetch_assoc($result)){
	$json_array[]=$row;
}
echo json_encode($json_array);
?>