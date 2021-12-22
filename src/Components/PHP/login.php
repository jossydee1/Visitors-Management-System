<?php
include_once("Core.php");
require 'connect.php';


$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
    $request = json_decode($postdata);

    //Sanitize
    $username = $request -> username;
    $password = $request ->password;
// $username = $_POST['username'];
// $password = $_POST['password']; //password is hashed

$SQL = "SELECT * FROM `vmslogin` WHERE `vmsusername`= '{$username}' AND `vmspassword`= '{$password}'";
$exeSQL = mysqli_query($con, $SQL);
$checkEmail =  mysqli_num_rows($exeSQL);

if ($checkEmail != 0) {
    $arrayu = mysqli_fetch_array($exeSQL);
    if ($arrayu['vmspassword'] != $password) {
        $Message = "pw WRONG";
    } else {
        $Message = "Success";
    }
} else {
    $Message = "No account yet";
}

$response[] = array("Message" => $Message);
echo json_encode($response);
}
// // $host="localhost";
// // $user="root";
// // $password="";
// // $db="new_vms";

// // mysqli_connect($host,$user,$password);
// // mysqli_select_db($db);

// // $postdata = file_get_contents("php://input");



// if (isset($_POST['username'])) {

//     $username=$_POST['username'];
//     $password=$_POST['password'];

//     $sql = "SELECT * FROM vmslogin WHERE vmsusername= '".$username."' AND vmspassword= '".$password."' 
//     ";

//     $result = mysqli_query($con, $sql);

// //     $result = mysqli_query($con,$sql);
// // $row = mysqli_fetch_assoc($result);

//         if(mysqli_num_rows($result)==1)
//         {
//             // http_response_code(201);
//             echo "Success";
//             // exit();
//         }
//         else
//         {
//             // http_response_code(422);
//             echo "Why na?";
//             // exit();
//         }

// }

// <?php
// include('db.php');

// $UserEmail = $decodedData['Email'];
// $UserPW = ($decodedData['Password']); //password is hashed

// $SQL = "SELECT * FROM newuser WHERE UserEmail = '$UserEmail'";
// $exeSQL = mysqli_query($conn, $SQL);
// $checkEmail =  mysqli_num_rows($exeSQL);

// if ($checkEmail != 0) {
//     $arrayu = mysqli_fetch_array($exeSQL);
//     if ($arrayu['UserPw'] != $UserPW) {
//         $Message = "pw WRONG";
//     } else {
//         $Message = "Success";
//     }
// } else {
//     $Message = "No account yet";
// }

// $response[] = array("Message" => $Message);
// echo json_encode($response);