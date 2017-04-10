<?php
class Res{
    public $status;
    public $msg;
    public $userid;
}

//获取客户端发送过来的参数
     $account = $_POST['account']; //从客户端获取的用户名
     $psw = $_POST['password']; //从客户端获取的密码

//将要注册的用户信息插入到数据库中
    $conn = new mysqli("127.0.0.1", "root", "", "project") or die("连接失败!");

    $isSuccess = false;
    //查询数据, 检测是否已经存在该用户
    $sql = "select * from users";
    $result = $conn->query($sql);
    if($result->num_rows > 0){
        while($row = $result->fetch_assoc()){
            if($row["account"] == $account && $row["password"] == $psw){
                $res = new Res();
                $res->status = 1;
                $res->msg = "success";
                $res->userid = $row["userid"];
                echo json_encode($res);

                $isSuccess = true;
            }
        }
        if(!$isSuccess){
            $res = new Res();
            $res->status = 0;
            $res->msg = "fail";
            $res->userid = "";
            echo json_encode($res);

        }

    }else {
        //echo "没有用户数据";
    }

    $conn->close(); //关闭数据库
?>