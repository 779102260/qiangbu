<?php 

$DB_HOST ="localhost:3306";
$DB_USER ="root";
$DB_PASSWORD ="talent";
//失败返回false
$conn=mysqli_connect($DB_HOST,$DB_USER,$DB_PASSWORD);
if(!$conn){
    die("连接失败：" . mysqli_error());
}
mysqli_query($conn , "set names utf8");

//选择数据库
$dbcc=mysqli_select_db($conn,"CC");
//创建数据库
if(!$dbcc){
    $retval=mysqli_query($conn,"CREAT DATABASE CC");
    print_r(111);
}


$sql="CREATE TABLE IF NOT EXISTS jp( ".
        "jp_id INT NOT NULL AUTO_INCREMENT, ".
        "jp_name VARCHAR(40), ".
        "jp_url VARCHAR(4000) NOT NULL, ".
        "submission_date DATE, ".
        "PRIMARY KEY ( jp_id ))ENGINE=InnoDB DEFAULT CHARSET=utf8; ";

$retval = mysqli_query($conn,$sql);

$sqlMessage = "INSERT INTO jp ".
        "(jp_name,jp_url,submission_date) ".
        "VALUES ".
        "('恒生阳光城李先生业主墙布案例','/images/jp_item01.jpg /images/shouye1.jpg /images/shouye1.jpg /images/shouye1.jpg /images/shouye1.jpg','".date("Y-m-d")."')";
$mResult = mysqli_query( $conn, $sqlMessage );
// die;


mysqli_close($conn);
?>