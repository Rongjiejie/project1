
// require 第一个参数 数组  元素为加载模块的地址
//第二个参数 回调函数  为模块加载完毕以后的处理
// require(['js/slide/slide.js'],function(slide){
//     console.log(slide);

// 对模块化加载进行基本设置
requirejs.config({
    baseUrl:"../",
    //设置依赖
    shim:{
        'common_jquery':['jquery']
    },

    //加载路径  和加载对象   //省略后缀
    paths:{
        'jquery':"lib/jquery",
        'common_jquery':"lib/common_jquery",
        'template':'lib/template-debug',
        'index':"js/index",
        'home':'js/home',
        'move':'js/move',
        'login':'js/login',
        'register':'js/register',
        'AjaxBase':'lib/AjaxBase',
        'list':'js/list',
        'details':'js/details',
        'magiczoom':'lib/magiczoom/magiczoom',
        'getinfo':'js/getinfo',
        'cookie':'lib/jquery.cookie',
        'carts':'js/carts'
    }

    //加载新的模块
})


//require 属于按需加载

require(["jquery",'index','login','register','list','details','carts'],function($,index,login,register,list,details,carts){

     var path = location.pathname; //进行路由设置

   console.log(path);
     if(path=="/project/src/index/index.html"){
          index.init();
     }else if (path=="/project/src/login/index.html") {
     	login.init();
     }else if(path=="/project/src/register/index.html"){
     	register.init();
     }else if (path=="/project/src/list/index.html") {
     	list.init();
     }else if (path=="/project/src/details/index.html") {
     	details.init();
     }else if(path=="/project/src/carts/index.html"){
     	carts.init();
     }else{
     	 index.init();
     }
		
})
