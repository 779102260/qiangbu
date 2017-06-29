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


// $sql="CREATE TABLE IF NOT EXISTS jp( ".
//         "jp_id INT NOT NULL AUTO_INCREMENT, ".
//         "jp_name VARCHAR(40), ".
//         "jp_url VARCHAR(4000) NOT NULL, ".
//         "submission_date DATE, ".
//         "PRIMARY KEY ( jp_id ))ENGINE=InnoDB DEFAULT CHARSET=utf8; ";

// $retval = mysqli_query($conn,$sql);

// $sqlMessage = "INSERT INTO jp ".
//         "(jp_name,jp_url,submission_date) ".
//         "VALUES ".
//         "('恒生阳光城李先生业主墙布案例','/images/jp_item01.jpg /images/shouye1.jpg /images/shouye1.jpg /images/shouye1.jpg /images/shouye1.jpg','".date("Y-m-d")."')";
// $mResult = mysqli_query( $conn, $sqlMessage );
// die;

// $sql="CREATE TABLE IF NOT EXISTS type( ".
//         "type_id INT NOT NULL AUTO_INCREMENT, ".
//         "type_name VARCHAR(40), ".
//         "type_url VARCHAR(4000) NOT NULL, ".
//         "submission_date DATE, ".
//         "PRIMARY KEY ( type_id ))ENGINE=InnoDB DEFAULT CHARSET=utf8; ";

// $retval = mysqli_query($conn,$sql);

// $arr=["墙布刺绣系列","木纹底布刺绣系列","印加绣系列","提花系列墙布","丝绢布高温印花墙布系列","背景墙墙布推荐","墙布客厅推荐","恒高AB版主卧婚房推荐","所有类型"];
// for($i=0;$i<count($arr);$i++){
//     $sqlMessage = "INSERT INTO type ".
//             "(type_name,type_url,submission_date) ".
//             "VALUES ".
//             "('".$arr[$i]."','/images/shouye3.jpg /images/shouye1.jpg','".date("Y-m-d")."')";
//     $mResult = mysqli_query( $conn, $sqlMessage );
// }



// $arr0=["cixiu","muwen","yinjia","tihua","sijuan","beijing","keting","hunfang","all","types"];
// for($i=0;$i<count($arr0);$i++){
//     $delsql="DROP TABLE ".$arr0[$i];
//     mysqli_query($conn,$delsql);
// }
// die;
//创建所有类表，分类名称
// $typesql="CREATE TABLE IF NOT EXISTS types( ".
//         "id INT NOT NULL AUTO_INCREMENT, ".
//         "enname VARCHAR(40), ".
//         "cnname VARCHAR(400), ".
//         "url VARCHAR(400), ".
//         "date DATE, ".
//         "PRIMARY KEY ( id ))ENGINE=InnoDB DEFAULT CHARSET=utf8; ";
// $retval = mysqli_query($conn,$typesql);
// $arr=["cixiu","muwen","yinjia","tihua","sijuan","beijing","keting","hunfang","all"];
// $arr1=["墙布刺绣系列","木纹底布刺绣系列","印加绣系列","提花系列墙布","丝绢布高温印花墙布系列","背景墙墙布推荐","墙布客厅推荐","恒高AB版主卧婚房推荐","所有类型"];
// for($i=0;$i<count($arr);$i++){
//     $name=$arr[$i];
//     $enname=$arr1[$i];
//     //读取此类文件夹里的文件名称
//     $urls=array();
//                 //请使用相对路径
//     $dirHandler=opendir("./piccenter/".$name);
//     while( ($fileName=readdir($dirHandler))!==false ){
//         if($fileName!="." && $fileName!=".."){
//             array_push($urls,$fileName);
//         }
//     }
//     //分类表插值
//     $sqlMessage = "INSERT INTO types ".
//                 "(enname,cnname,url,date) ".
//                 "VALUES ".
//                 "('".$name."','".$enname."','".$urls[0]."','".date("Y-m-d")."')";
//     mysqli_query($conn,$sqlMessage);

//     //创建此类表
//     $sql="CREATE TABLE IF NOT EXISTS ".$name."( ".
//         "id INT NOT NULL AUTO_INCREMENT, ".
//         "url VARCHAR(400), ".
//         "date DATE, ".
//         "PRIMARY KEY ( id ))ENGINE=InnoDB DEFAULT CHARSET=utf8; ";
//     $retval = mysqli_query($conn,$sql);
//     //此类表差值
//     for($j=0;$j<count($urls);$j++){
//         $sqlMessages = "INSERT INTO ".$name." ".
//                 "(url,date) ".
//                 "VALUES ".
//                 "('".$urls[$j]."','".date("Y-m-d")."')";
//         $mResult = mysqli_query( $conn, $sqlMessages );
//     }   
// }
 

$retval = mysqli_query($conn,$sql);
mysqli_close($conn);
?>