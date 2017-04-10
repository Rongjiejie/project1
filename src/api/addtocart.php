<?php
$userid = $_POST["userid"];
$goodsId = $_POST["goodsid"];


//
$conn = new mysqli("127.0.0.1", "root", "", "project") or die("connect error");
$sql = "insert into carlist(goodid, uid) values('$goodsId', '$userid')";
if ($conn->query($sql)){
    echo "success";
}
else {
    echo "fail";
}

$conn->close();


































