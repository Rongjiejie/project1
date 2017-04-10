//定义主页模块
//定义模块的方法
define(['jquery','template','home','cookie'],function($,template,home,cookie){
    return {
        init:function(){
        	
        	
        	$('body').append('<div class="all"/>');
        	home.init();
        	home.addnavHeader();
        	home. addtopTabBox();
        	home.addrightSide();
        	home.addleftSide();
        	home.addContent();
        	home.adddocFoot();
        	this.bind()
        	return this;
        	
        },
        bind:function(){
             $(function() {
				
				var data;

				$.get('../api/home.php', function(data) {
					console.log(data);
					
					
					if($.cookie('logging')){
						var str = $.cookie('logging');
						$('.login').html(str +`	
						<a href="#" class="exit" style="margin-left:4px">[退出]</a>`)
						$('.reg').css('display','none')
					}
					 $('.exit').on('click',function(){
						setTimeout(function(){
						
								window.location.href='/project/src/login/index.html';
								$.cookie('logging',"",{expires:7, path:"/"});
						},1000)
						return false;
					});
				
			
					data.forEach((item) => {
						var $div = $('<div/>');
						$div.addClass('Louti');
						$div.addClass('floor-cont');
						$div.html(`
							<div class="w-tit1 w-tit1-1 cl">
								<h2 class="w-tit1 w-tit1-1"><span class="big">${item.gTitle}</span>${item.gTitledes}<a class="more" href="#">更多好货&gt;</a></h2>
							</div>
							<div class="cont cl ">
								<div class="partl">
									<a href="# ">
										<img src="${item.hImg}"/>
									</a>
									<ul class="w-secondlist cl ">
										<li><a class="itm " href="#"><span class="txt">${item.gList1}</span></a>
									</li>
									<li>
										<a class="itm" href="#"> <span class="txt">${item.gList2}</span></a>
									</li>
									<li><a class="itm" href="#"><span class="txt">${item.gList3}</span></a></li>
									<li><a class="itm" href="#"><span class="txt">${item.gList4}</span></a></li>
									<li><a class="itm" href="#"><span class="txt">${item.gList5}</span></a></li>
									<li><a class="itm" href="#"><span class="txt">${item.gList6}</span></a></li>
								</ul>
							</div>
							<div class="partm cl">
								<ul class="w-activlist cl">
									<li class="itm1 cl">
										<a class="pic cl" href="#">
											<h3 class="tit">${item.gLi1h}</h3>
											<p class="desc s-fc2">${item.gLi1p}</p>
											<img src="${item.gImg1}">
										</a>
									</li>
									<li class="itm2">
										<a class="pic" href="#">
											<h3 class="tit">${item.gLi2h}</h3>
											<p class="desc s-fc2">${item.gLi2p}</p>
											<img src="${item.gImg2}" />
										</a>
									</li>
									<li class="itm3">
										<a class="pic" href="#">
											<h3 class="tit">${item.gLi3h}</h3>
											<p class="desc s-fc2">${item.gLi3p}</p>
											<img src="${item.gImg3}" />
										</a>
									</li>
									<li class="itm4">
										<a class="pic" href="#">
											<h3 class="tit">${item.gLi4h}</h3>
											<p class="desc s-fc2">${item.gLi4p}</p>
											<img src="${item.gImg4}" />
										</a>
									</li>
								</ul>
							</div>
							<div class="party m-prolist cl">
								<img src="${item.gliImg}" />
							</div>
							</div>
						<div class="w-logolist cl">
						<span class="txt">热卖品牌：</span>
						<a class="pic" href="#">
							<img src="${item.hImg1}" />
							<span class="follow"></span>
						</a>
						<a class="pic" href="#">
							<img src="${item.hImg2}" />
							<span class="follow"></span>
						</a>
						<a class="pic" href="#">
							<img src="${item.hImg3}" />
							<span class="follow"></span>
						</a>
						<a class="pic" href="#">
							<img src="${item.hImg4}" />
							<span class="follow"></span>
						</a>
						<a class="pic" href="#">
							<img src="${item.hImg5}" />
							<span class="follow"></span>
						</a>
						<a class="pic" href="#">
							<img src="${item.hImg6}" />
							<span class="follow"></span>
						</a>
						<a class="pic" href="#">
							<img src="${item.hImg7}" />
							<span class="follow"></span>
						</a>
						<a class="pic" href="#">
							<img src="${item.hImg8}" />
							<span class="follow"></span>
						</a>
					</div>	
						`)

						$("#contentNav").append($div);
					})
				}, 'json');
				//点击某一个楼层按钮
				$(".LoutiNav li").on("click", function() {
					//改变按钮的选中状态
					$(this).addClass('hover').siblings().removeClass('hover').children('span').addClass('active').parent('li').siblings().children('span').removeClass('active');

					//移动页面
					var index = $(this).index();
					var $top = $(".Louti").eq(index).offset().top;
					$("html, body").stop().animate({
						scrollTop: $top
					}, 200, function() {});

				})

				//页面滚动
				$(window).scroll(function() {

					//如果没有正在移动, 则执行里面的代码, 否则不执行

					var $scrollTop = $(document).scrollTop();
					//						console.log($scrollTop);

					if ($scrollTop >= 700) {

						$('.fixFooter').addClass('_fixFooter');
						$('.LoutiNav').addClass('_LoutiNav');

					} else {
						$('.fixFooter').removeClass('_fixFooter');
						$('.LoutiNav').removeClass('_LoutiNav');

					}

					//						遍历所有的楼层div
					$(".Louti").each(function() {

						var $top = $(this).offset().top;

						if ($scrollTop >= $top) {
							//console.log(_top);

							var index = $(this).index();

							$('#LoutiNav li').eq(index).addClass('hover').siblings().removeClass('hover').children('span').addClass('active').parent('li').siblings().children('span').removeClass('active');
						}
					})
				})

			})
			var oBox = document.getElementById("box"),
				oList = document.getElementById("list"),
				aLi = oList.getElementsByTagName('li'),
				index = 0, //表示显示第一张图片
				aBtn = document.getElementById("btn").getElementsByTagName("li");
			var timer = null;

			function move() {
				index++;
				//				console.log(index);
				for (var i = 0; i < aLi.length; i++) {
					//将要显示的对象
					if (i == index % aLi.length) {
						startMove(aLi[i], {
							'opacity': 1
						});
						aBtn[i].className = "active";
					} else {
						startMove(aLi[i], {
							'opacity': 0
						});
						aBtn[i].className = "";
					}
				}
			}
			tiemr = setInterval(move, 3000);

			//遍历btn
			for (var i = 0; i < aBtn.length; i++) {
				aBtn[i].n = i;
				aBtn[i].onclick = function() {
					//this.n 当前下标

					clearInterval(timer);
					//改变当前的下标
					index = this.n - 1;
					move(); //调用move()
					timer = setInterval(move, 3000);
				}
			}
			document.getElementById("next").onclick = function() {
				clearInterval(timer);
				//显示下一站
				move();
				timer = setInterval(move, 3000);
			}

			document.getElementById("prev").onclick = function() {
				clearInterval(timer);
				//改变index
				//即将现实的index -1

				if (index == 0) {
					index = aLi.length;
				}
				index = index - 2;
				//显示下一张
				move();
				timer = setInterval(move, 5000);
			}
        }
    }
})

