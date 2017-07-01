<?php
// 使用中文， msyql utf8  /  php文件，加header

// header("Content-Type: text/html; charset=uft-8");
// echo '<meta http-equiv="content-type" content="text/html;charset=utf-8">';
// print_r("是否") ;die;

// session_start();
// if(!isset($_SESSION["conn"])){
    // error_reporting(0);
    $DB_HOST ="localhost:3306";
    $DB_USER ="root";
    $DB_PASSWORD ="talent";
    //失败返回false
    $conn=mysqli_connect($DB_HOST,$DB_USER,$DB_PASSWORD);
    if(!$conn){
    	die("连接失败：" . mysqli_error());
    }
    mysqli_query($conn , "set names utf8");
    // $_SESSION["conn"]=$conn;
    //选择数据库
    $dbcc=mysqli_select_db($conn,"CC");
    //创建数据库
    if(!$dbcc){
        $retval=mysqli_query($conn,"CREAT DATABASE CC");
    }
// }else{
//  	$conn=$_SESSION["conn"];
//     //选择数据库
//     $dbcc=mysqli_select_db($conn,"cc");
//     //创建数据库
//     if(!$dbcc){
//         $retval=mysqli_query($conn,"CREAT DATABASE cc");
//     }
// }


    //读取案例的文件夹和文件信息
    // $sql="CREATE TABLE IF NOT EXISTS anli( ".
    //         "jp_id INT NOT NULL AUTO_INCREMENT, ".
    //         "jp_name VARCHAR(400) NOT NULL, ".
    //         "jp_url VARCHAR(4000) NOT NULL, ".
    //         "jp_detail VARCHAR(4000) NOT NULL, ".
    //         "submission_date DATE, ".
    //         "PRIMARY KEY ( jp_id ))ENGINE=InnoDB DEFAULT CHARSET=utf8; ";
    // mysqli_query( $conn, $sql );
    // $dirHandler=opendir("./piccenter_al");
    // while( ($fileName=readdir($dirHandler))!==false ){
    //         // echo($fileName);
    //     if($fileName=="." || $fileName==".."){
    //         continue;
    //     }
    //     $jp_name=toUtf8($fileName);
    //     $jp_url="";
    //     $jp_detail="";
    //     $dirHandler1=opendir("./piccenter_al/".$fileName);
    //     while( ($fileName1=readdir($dirHandler1))!==false ){
    //         if($fileName1=="." || $fileName1==".."){
    //             continue;
    //         }
    //         $index=strpos($fileName1,".");
    //         $ext=substr($fileName1,$index+1);
    //         if($ext=="jpg" || $ext=="png"){
    //             $jp_url=$jp_url.",".$fileName1;
    //         }else if($ext=="txt"){
    //             // print_r($fileName1);
    //             // print_r("\n");
    //             $detailFile=fopen("./piccenter_al/".$fileName."/".$fileName1, "r");
    //             $jp_detail=fgets($detailFile);
    //             $jp_detail=toUtf8($jp_detail);
    //             fclose($detailFile);
    //         }
    //     }

    //     $sqlMessage2 = "INSERT INTO anli ".
    //     "(jp_name,jp_url,jp_detail,submission_date) ".
    //     "VALUES ".
    //     "('".$jp_name."','".substr($jp_url,1)."','".$jp_detail."','".date("Y-m-d")."')";
    //     $reval1=mysqli_query( $conn, $sqlMessage2 );
    // }
    // die;

$sql="SELECT * from anli";
$retval = mysqli_query( $conn, $sql);
$result=array("result"=>true,"data"=>array());
while($row = $retval->fetch_assoc()){
	array_push($result["data"],$row);
}
echo  json_encode($result);


mysqli_close($conn);

function toUtf8($str){
    //文件读出来的汉字非utf8
    //window取出来的是ISO-8859-1
    $uCode=mb_detect_encoding($str,"UTF-8, ISO-8859-1, GBK");
    if($uCode!=="UTF-8"){
        //这里必须是gbk....
        return iconv("gbk","utf-8",$str);
    }else{
        return $str;
    }
}
?>