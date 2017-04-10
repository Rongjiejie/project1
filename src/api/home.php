<?php 
    class Goods{
        public $gId;
        public $gTitle;
        public $hImg;
        public $gTitledes;
		public $gList1;
		public $gList2;
		public $gList3;
		public $gList4;
		public $gList5;
		public $gList6;
		public $gLi1h;
		public $gLi1p;
		public $gLi2h;
		public $gLi2p;
		public $gLi3h;
		public $gLi3p;
		public $gLi4h;
		public $gLi4p;
		public $gImg1;
		public $gImg2;
		public $gImg3;
		public $gImg4;
		public $gliImg;
		public $hImg1;
		public $hImg2;
		public $hImg3;
		public $hImg4;
		public $hImg5;
		public $hImg6;
		public $hImg7;
		public $hImg8;
	
    }
    
    $con = new mysqli('127.0.0.1','root','','project');
    $con->query("set names utf8"); //设置编码为utf8 显示中文
    $sql = 'select * from home';
    $res = $con->query($sql);
    $arr = array();
    if($res->num_rows > 0){

        while($row = $res->fetch_assoc()){
            $goods = new Goods();
			$goods->gId = $row["gid"];
            $goods->gTitle = $row["gtitie"];
            $goods->hImg = $row["himg"];
            $goods->gTitledes = $row["gtitledes"];
			$goods ->gList1 = $row["glist1"];
			$goods ->gList2 = $row["glist2"];
			$goods ->gList3 = $row["glist3"];
			$goods ->gList4 = $row["glist4"];
			$goods ->gList5 = $row["glist5"];
			$goods ->gList6 = $row["glist6"];
			$goods ->gLi1h = $row["gli1h"];
			$goods ->gLi1p = $row["gli1p"];
			$goods ->gLi2h = $row["gli2h"];
			$goods ->gLi2p = $row["gli2p"];
			$goods ->gLi3h = $row["gli3h"];
			$goods ->gLi3p = $row["gli3p"];
			$goods ->gLi4h = $row["gli4h"];
			$goods ->gLi4p = $row["gli4p"];
			$goods ->gImg1 = $row["gimg1"];
			$goods ->gImg2 = $row["gimg2"];
			$goods ->gImg3 = $row["gimg3"];
			$goods ->gImg4 = $row["gimg4"];
			$goods ->gliImg = $row["glimg"];
			$goods ->hImg1 = $row["himg1"];
			$goods ->hImg2 = $row["himg2"];
			$goods ->hImg3 = $row["himg3"];
			$goods ->hImg4 = $row["himg4"];
			$goods ->hImg5 = $row["himg5"];
			$goods ->hImg6 = $row["himg6"];
			$goods ->hImg7 = $row["himg7"];
			$goods ->hImg8 = $row["himg8"];
            array_push($arr, $goods);
        }

        //返回json字符串  
    }else {
        array_push($arr, "没有商品");
    }
    //判断是否是jsonp的请求
    //isset(var) 判断变量是否被定义
    if(isset($_REQUEST['callback'])){
        // 表示是一个jsonp的请求
        //找到callback 的函数名称
        $callback = $_REQUEST['callback'];
        //调用callback的函数
        $str = json_encode($arr);
        print_r( $callback."('$str')");
    }else{
    	$str = json_encode($arr);
         //echo json_encode($arr);
         print_r( $str );

    }
    