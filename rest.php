<?php 
// phpinfo();
const DB_HOST = "localhost:3306";
const DB_USER = "root";
const DB_PASSWORD = "talent";
// character-set-server = utf8
//失败返回false
$conn=mysqli_connect(DB_HOST,DB_USER,DB_PASSWORD);
print_r(mysqli_error());
if(!$conn){
	die("连接失败：" . mysqli_error());
}
//选择数据库
$dbcc=mysqli_select_db($conn,"CC");
//创建数据库
if(!$dbcc){
	$retval=mysqli_query($conn,"CREAT DATABASE CC");
}
//创建消信息表
$tableMessage="CREATE TABLE message( ".
        "message_id INT NOT NULL AUTO_INCREMENT, ".
        "message_name VARCHAR(40), ".
        "message_phone VARCHAR(40) NOT NULL, ".
        "message_message VARCHAR(400), ".
        "submission_date DATE, ".
        "PRIMARY KEY ( message_id ))ENGINE=InnoDB DEFAULT CHARSET=utf8; ";
mysqli_query($conn,$tableMessage);

$data=$_POST;
$sqlMessage = "INSERT INTO message ".
        "(message_name,message_phone,message_message,submission_date) ".
        "VALUES ".
        "('".$data["name"]."','".$data["phone"]."','".$data["message"]."','".date("Y-m-d")."')";
$mResult = mysqli_query( $conn, $sqlMessage );
if($mResult){
	echo json_encode(array("result"=>true,"data"=>"success"));
}

// 关闭连接
// mysqli_close($conn);
?>