<?php

header("Content-type:text/html;charset=utf-8");
//连接数据库
$conn = mysql_connect("localhost","root","root");
//选择数据库
mysql_select_db("student");
//获取请求过来的数据
$name = $_GET["username"];

$reslut = mysql_query("select * from student1 where stuName = '$name'");

$rows = mysql_num_rows($reslut);

if($rows == 1){
	echo "1";
}else{
	echo "0";
}
?>