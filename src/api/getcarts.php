<?php

//获取购物车商品

    class Goods{
        public $goodsId;
        public $goodsName;
        public $goodsPrice;
        public $goodsImg;
    }

    //得到userid
    $userid = $_GET["userid"];

//连接数据库
    $conn = new mysqli("127.0.0.1", "root", "", "project") or die("connect error");
  //  $conn->query("set names utf8"); //设置编码为utf8
    //http://blog.csdn.net/wzwsj1986/article/details/1723658
    $sql = "select * from goods inner join carlist on goods.gid=carlist.goodid where carlist.uid='$userid'";
    $result = $conn->query($sql);
    if($result->num_rows > 0){
        $arr = array();
        while($row = $result->fetch_assoc()){
            $goods = new Goods();
            $goods->goodsId = $row["gid"];
            $goods->goodsName = $row["goodsname"];
            $goods->goodsPrice = $row["goodsprice"];
            $goods->goodsImg = $row["goodsImg"];
            array_push($arr, $goods);
        }

        //返回json字符串
        echo json_encode($arr);
    }
    else {
        echo "[]";
    }

    $conn->close();













