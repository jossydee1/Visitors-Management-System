<?php
$serverName = "localhost";
$username = "root";
$password = "root";
$databaseName = "new_vms";

$conn = mysqli_connect($serverName, $username, $password, $databaseName);

$recText = $request -> ['firstNamxxe'];

$querry = "INSERT INTO visitors (firstName) VALUES('$recText')";

if(mysqli_query($conn,$querry)){
    echo "Successful";
}
else{
    echo "Error"
}