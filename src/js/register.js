//定义主页模块
//定义模块的方法
define(['jquery','template','home','AjaxBase','cookie'],function($,template,home,AjaxBase,cookie){

    return {
        init:function(){
        	$('body').append('<div class="all"/>');
        	home.init();
        	
        	$('.all').append(this.template. navlogin());
        	this.bind();
        	home.adddocFoot();
        	return this;
        	
        	
        },
        bind:function(){
          
							var vcode=randomCode();
							
							$('#inpt-account').blur(function(){
								unDecide();
								
							});
							$('#inpt-pw').blur(function(){
								pwDecide();
							});
							$('#inpt-pw2').blur(function(){
								pw2Decide();
							});
							$('#inpt-phone').blur(function(){
								phoneDecide();
							});
							$('#inpt-sms').blur(function(){
								cdDecide();
							});
							
							$('.btn-reg').click(function(){
							unDecide();
							pwDecide();
							pw2Decide();
							phoneDecide();
							cdDecide();
							var oPsw = document.getElementById('inpt-pw');
					            var oAccount = document.getElementById('inpt-account');
					            var oPhone = document.getElementById('inpt-phone');
								var account = oAccount.value;
					            var psw = oPsw.value;
					            var phone = oPhone.value;
					         
					            	
							if(un&&pw&&cd&&pw2&&phone){
								 ajax({
				                    method:"POST",
				                    url:'../api/register.php',
				                    data:{
				                        "account":account,
				                        "password":psw,
				                        "phone":phone
				                    },
				                    callback:function(str){
				                        console.log(str);    
				                    }
				                 
				                    
				                })
								   var str1 = "";
								if($.cookie('user')){
									str1 = $.cookie('user');
									str1 += "?"+$('#inpt-account').val()+","+$('#inpt-pw').val();
								}else{
									str1 = $('#inpt-account').val()+","+$('#inpt-pw').val();
								}
								$.cookie('user',str1,{expires:7, path:"/"});
								console.log('存储成功');
				                   $('.all').css({
									'height':"300px",
									'text-align':'center',
									'color':'#02AFFF',
									'line-height':"300px",
									"font-size": "40px"
								}).html('注册成功去登录，3秒后跳转到登录页面....');
								setTimeout(function(){
									window.location.href='../login/index.html';
								},1500)  
								
								
								
								
								
					
							}
						})
						function unDecide(){
							un=0;
							if($('#inpt-account').val() ==""){
							 	$('.un .err').css('display','block').find('.b-p').html('用户名不能为空');
							 
							}else if($('#inpt-account').val().length<6){
								$('.un .err').css('display','block').find('.b-p').html('用户名不能少于6位');
							}
							else{
							$('.un .succ').css('display','block');
							un = true;
							}	
							
						}
						function pwDecide(){
					
							pw=0;
							
							if($('#inpt-pw').val()==''){
								$('.pw .err').css('display','block').find('.b-p').html('密码不能为空');
							}else if($('#inpt-pw').val().length<6){
								$('.pw .err').css('display','block').find('.b-p').html('密码不能少于6位');
							}else{
								$('.pw .succ').css('display','block');
								pw=true;
							}
						}
						function pw2Decide(){
					
							pw2=0;
							
							if($('#inpt-pw2').val()==''){
								$('.pw2 .err').css('display','block').find('.b-p').html('密码不能为空');
							}else if($('#inpt-pw2').val().length<6){
								$('.pw2 .err').css('display','block').find('.b-p').html('密码不能少于6位');
							}else if($('#inpt-pw2').val() !=$('#inpt-pw').val()){
								$('.pw2 .err').css('display','block').find('.b-p').html('两次输入密码不一致');
							}else{
								$('.pw2 .succ').css('display','block');
								pw2=true;
							}
						}
						function phoneDecide(){
					
							phone=0;
							
							if($('#inpt-phone').val()==''){
								$('.phone .err').css('display','block').find('.b-p').html('手机号不能为空');
							}else if($('#inpt-phone').val().length<11){
								$('.phone .err').css('display','block').find('.b-p').html('请输入11位正确手机号');
							}else{
								$('.phone .succ').css('display','block');
								phone=true;
							}
						}
						function cdDecide(){
							cd=0;
							var reg = new RegExp(vcode, "i");
							if($('#inpt-sms').val()=="" || $('#inpt-sms').val().length>4){
								$('.cd .err').css('display','block').find('.b-p').html('验证码不正确');
							}else if(!reg.test($('#inpt-sms').val())){
								$('.cd .err').css('display','block').find('.b-p').html('验证码不正确');
							}else{
								$('.cd .succ').css('display','block');
								cd=true;
							}
						}
						
						
						$('#vcode').html(vcode);
							
						$('#vcode').on('click',function(){
							vcode = randomCode();
							$('#vcode').html(vcode);
							return false;
						
						})
						function randomCode(){
						var vcode = "";
						for (var i=0;i<4;i++) {
							if(parseInt(Math.random()*2)){
								vcode += parseInt(Math.random()*10);
							}else{
								vcode += String.fromCharCode(parseInt(Math.random()*26)+65);
							}	
						}
						return vcode;
					}
							
							
        },
        template:{
	      navlogin:template.compile(`<div class="g-hd">
			<div class="m-logo spritebg"></div>
			<div class="m-tr-block">已有帐号？去<a  href="../login/index.html">登录</a></div>
		</div>

		<div id="reg_block" class="g-bd">

			<div class="top_tlt">注册帐号</div>
			<div class="m-opr cl">
				<form>
					<div class="u-input firstelem un">
						<label for="inpt-account" class="u-label">帐号：</label>
						<input type="text" name="email" id="inpt-account" class="i-inpt i-inpt-small" placeholder="6-18位字母数字组合">
						

						<select id="selectSuffix" class="m-select">
						                <option>@163.com</option>
						                <option>@126.com</option>
						                <option>@yeah.net</option>
						</select>
						<table class="popb err">
                				<tbody><tr><td class="b-i"><i></i></td><td class="b-p"></td></tr></tbody>
            			</table>
            			<span class="popb succ"><i></i></span>
					</div>
					<div class="u-input pw">
						<label for="inpt-pw" class="u-label">密码：</label>
						<input type="password" name="pwd" id="inpt-pw" placeholder="6-16位密码，区分大小写" class="i-inpt">
						<table class="popb err">
                				<tbody><tr><td class="b-i"><i></i></td><td class="b-p"></td></tr></tbody>
            			</table>
            			<span class="popb succ"><i></i></span>
					</div>
					<div class="u-input pw2">
						<label for="inpt-pw2" class="u-label">确认密码：</label>
						<input type="password" name="pwd2" id="inpt-pw2" placeholder="再次输入密码" class="i-inpt ">
						<table class="popb err">
                				<tbody><tr><td class="b-i"><i></i></td><td class="b-p"></td></tr></tbody>
            			</table>
            			<span class="popb succ"><i></i></span>
					</div>
					<div class="u-input phone">
						<label for="inpt-phone" class="u-label">手机号：</label>
						<input type="text" name="phone" id="inpt-phone" placeholder="11位手机号" maxlength="20" class="i-inpt ">
						<table class="popb err">
                				<tbody><tr><td class="b-i"><i></i></td><td class="b-p"></td></tr></tbody>
            			</table>
            			<span class="popb succ"><i></i></span>
					</div>
					<div class="u-input  cd">
						<label for="inpt-sms" class="u-label">验证码：</label>
						<input type="text" name="sms" id="inpt-sms" placeholder="输入验证码" maxlength="4" class="i-inpt smsize ">
							
						<span class="b-btn btn-getsms" id = "vcode">验证码</span>
						<table class="popb err">
                				<tbody><tr><td class="b-i"><i></i></td><td class="b-p"></td></tr></tbody>
            			</table>
            			<span class="popb succ"><i></i></span>
					</div>
					<div class="u-input" style="height: 58px;">
						<label class="u-label">&nbsp;</label>
						<div class="b-btn btn-reg btn-red btndisabled">注&nbsp;&nbsp;册 </div>
					</div>
					<div class="u-tips">
						<label class="u-label">&nbsp;</label>
						<span class="tip">
						  <span class="m-agree m-agree-ok"><input type="checkbox" class="u-agree" checked="checked"></span><span style="margin-left: 10px;">用户勾选即代表同意</span><a href="#">《服务条款》</a> 和
						<a href="#">《网络游戏用户隐私保护和个人信息利用政策》</a></span>
					</div>
				</form>
			</div>
			<a href="#" target="_blank" style="display:block;position:initial;margin:0 auto;width:900px;height:180px;overflow:hidden;border-radius:2px;margin-top: -100px;">
			<img src="../img/g.png" />	
			</a>
		</div>`)
	        }
    }
})
