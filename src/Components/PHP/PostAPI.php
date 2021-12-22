<?php

//Connection
$conn = mysqli_connect("localhost", "root", "", "new_vms");

//Grab the data
$input1 =$_POST['setInput1'];
$input2 =$_POST['input2'];
$input3 =$_POST['input3'];
$input4 =$_POST['input4'];
$input5 =$_POST['input5'];
$input6 =$_POST['input6'];
$input7 =$_POST['input7']; 
$input8 =$_POST['input8'];
$input9 =$_POST['input9'];
$input10 =$_POST['input10'];

// Insert into databse table
$sql = mysqli_query($conn, "INSERT INTO visitors (firstName, last_name) VALUES ('$input1', '$input2')");


// Return response to the browser
if($sql) {
    echo "<div><strong>Success: </strong>You data has been saved!</div>";
}
