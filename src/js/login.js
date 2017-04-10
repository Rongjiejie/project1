define(['jquery', 'template', 'home','AjaxBase','cookie'], function($, template, home,AjaxBase,cookie) {

	return {
		init: function() {
			$('body').append('<div class="all"/>');
			home.init();
			$('.all').append(this.template.navregister());

			home.adddocFoot();
			
			this.bind();
			return this;
		},
bind: function() {
						
						
							
							$('.accon').blur(function(){
								unVerify();
								
							});
							$('.pswd').blur(function(){
								pwVerify();
							});	
							
							
							$('.u-loginbtn').click(function(){
								unVerify();
								pwVerify();
								if(accon&&pswd){
									
								 	var oPsw = document.getElementById('pswd');
								 
						            var oAccount = document.getElementById('accon');  
										var account = oAccount.value;
										console.log(account)
						                var psw = oPsw.value;
						                var xhr = createXHR();
						                xhr.open("POST", "../api/login.php", true);
						                xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
										
						                var params = "account=" +account + "&password=" + psw ;
						                xhr.send(params);
						                console.log(params);
						
						                xhr.onreadystatechange = function() {
						                    if (xhr.readyState == 4 && xhr.status == 200) {
						                        var obj = JSON.parse(xhr.responseText);
						                        console.log(obj);
						
						                        if (obj.status == 1){
						                            $('.all').css({
														'height':"300px",
														'text-align':'center',
														'color':'#02AFFF',
														'line-height':"300px",
														"font-size": "40px"
														}).html("登录成功");
													
						                            var str = $.cookie('user');	
						                            var str1 = str.split('?');
						                            for(var i=0;i<str1.length;i++){
						                            	var str2 = str1[i].split(',');
						                            	
						                            	$.cookie('logging',str2[0],{expires:7, path:"/"});
														
														
						                            }
						                           
						                            setTimeout(function(){
													location.href = "../index/index.html?user="+str2[0];
												},1500)
						            
						                      	
						                        } 
						                        else{
						                        	alert('账号不存在或者密码错误')
						                        }
						                    }
						                }
						              }
								
							});
							function unVerify(){
								accon=0;
								if($('.accon').val()==""){
									$('.m-nerror').css('display','block').find('.ferrorhead').html('账号不能为空')
								}else{
									$('.m-nerror').css('display','none');
									accon=1;
								}
							}
							function pwVerify(){
								pswd=0;
								if($('.pswd').val()==""){
									$('.m-nerror').css('display','block').find('.ferrorhead').html('密码不能为空')
								}else{
									$('.m-nerror').css('display','none');
									pswd=1;
								}
							}
							//		阻止a的默认事件
							return false;
		},
		template: {
			navregister: template.compile(`<header id="docHead">
				<div id="docHeadWrap">
					<a href="../index/index.html" class="logokaola" ></a>
					<div class="logo f-dn"><a class="logokaolalt" href="../index/index.html"></a></div>
					<div id="topimg"></div>
				</div>
			</header>
			<div class="login-banner">
				<div class="m-loginBody">
					<img src="../img/bg.png" class="defaultimg">
					<div class="m-loginWrap cl" id="loginwrap">
						<form id="login-form">
						<h2 class="cl"><span class="tit">登录网易邮箱账号</span></h2>
							<div class="inputbox" id="account-box">
								<div class="u-logo">
									<div class="u-logo-img1"></div>
								</div>
								<div class="u-input box ">
								<label class="u-label f-dn"style="display: block;"></label>
								<input placeholder="网易邮箱账号" class="accon" type="text" id="accon">
								</div>
							</div>
							<div class="inputbox id="password-box">
								<div class="u-logo">
									<div class="u-logo-img2"></div>
								</div>
								<div class="u-input box ">
								<label class="u-label" style="display: block;"></label>
								<input placeholder="密码" class="pswd" type="password" id="pswd">
								</div>
							</div>
							<div class="m-nerror err_email" id="nerror">
								<div class="ferrortail"></div>
								<div class="ferrorhead">密码不能为空</div>
							</div>
							<div class="m-unlogin">
							<div class="b-unlogn j-unlogn" >
							<span class="u-checkbox tabfocus">
							<input id="un-login" type="checkbox" checked=checked>
							</span>
							<label for="un-login" >十天内免登录</label>
							</div><a class="forgetpwd j-redirect" href="#" >忘记密码？</a></div>
							
							<div class="f-cb loginbox"><a  class="u-loginbtn" tabindex="8">登&nbsp;&nbsp;录</a></div>
						</form>
					  
					<ul class="formList" style="width:auto;">
						<li class="regtip">
						<em>没有网易邮箱？&nbsp;<a target="_blank" href="../register/index.html">立即免费注册&gt;&gt;</a></em>
						</li>
					</ul>
					<ul class="m-thirdpart cl">
						<li class="text">使用第三方账号登录：</li>
						<li class="wx"><a href="#"><i class="w-icon w-icon-28"></i></a></li>
						<li class="zfb"><a href="#"><i class="w-icon w-icon-28 w-icon-28-1"></i></a></li>
						<li class="wb"><a href="#"><i class="w-icon w-icon-28 w-icon-28-2"></i></a></li>
						<li class="qq"><a href="#"><i class="w-icon w-icon-28 w-icon-28-3"></i></a></li>
					</ul>
					
				</div>
				</div>
			</div>`)
		}
	}
})