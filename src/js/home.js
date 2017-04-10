//定义主页模块
//定义模块的方法
define(['jquery','template','move','cookie'],function($,template,move,cookie){

    return {
        init:function(){
        			console.log("已登录用户："+$.cookie('logging'));
					console.log("全部用户："+$.cookie('user'));
        },
        addnavHeader:function(){
	        	$('.all').append(this.template.navHeader());
	            return this
        },
        addtopTabBox:function(){
	        	$('.all').append(this.template.topTabBox());
	            return this
        },
         addrightSide:function(){
	        	$('.all').append(this.template.rightSide());
	            return this
        },
         addleftSide:function(){
	        	$('.all').append(this.template.leftSide());
	            return this
        },
        addContent:function(){
        	$('.all').append(this.template.contentNav());
        	return this
        },
       
         adddocFoot:function(){
        	$('.all').append(this.template. docFoot());
        	return this
        },
        
	        template:{
	        	navHeader:template.compile(`<nav id="topNavWrap" class="cl">
				<div id="topNavLeft">
				
					考拉欢迎你！<a href="../login/index.html" target="_blank" class="login">登录</a><span class="sep">|</span><a target="_blank" href="../register/index.html" class = "reg">免费注册</a>
					<a class="app" href="#">
						<i class="iconfont icon-shouji1"></i>手机考拉海购
						<span class="notice">
									<img src="../img/2dcode-app3.jpg" width="116px" height="116px">
									<strong class="txt">下载APP<br>领1000元新人礼包</strong>
								</span>
					</a>
				</div>
				<ul id="topNavRight">
					<li>
						<a href="#"><i class="iconfont icon-hongqi"></i>每日签到</a><span class="sep">|</span>
					</li>
					<li><a href="#">我的订单</a><span class="sep">|</span></li>
					<li class="message">
						<a href="#">个人中心<img src="../img/mn.png"></a>
						<div class="mcDropMenu">
							<a href="#"><span class="cnt">我的优惠券</span></a>
							<a href="#"><span class="cnt">我的考拉豆</span></a>
							<span class="spliter"></span>
							<a href="#"><span class="cnt">账户安全</span></a>
							<a href="#"><span class="cnt">我的实名认证</span></a>
							<span class="spliter"></span>
							<a href="#"><span class="cnt">我收藏的商品</span></a>
							<a href="#"><span class="cnt">我关注的品牌</span></a>
							<span class="spliter"></span>
							<a href="#"><span class="cnt">售后管理</span></a>
						</div>
					</li>
					<li class="sep">|</li>
					<li class="message help">
						<a class="toplevel topNavHolder nolink">客户服务<img src="../img/mn.png"></a>
						<div class="mcDropMenu">
							<a href="#">联系客服</a>
							<a href="#">帮助中心</a>
						</div>
					</li>
					<li class="sep">|</li>
					<li class="message">
						<a href="#">充值中心<img src="../img/mn.png"></a>
						<div class="mcDropMenu">
							<a href="#">话费充值</a>
							<a href="#">游戏充值</a>
						</div>

					</li>
					<li class="sep">|</li>
					<li><a href="#">消费者告知书</a><span class="sep">|</span></li>
					<li class="message more">
						<a href="#">更多<img src="../img/mn.png"></a>
						<div class="mcDropMenu">
							<a href="#">收藏本站</a>
							<span class="spliter"></span>
							<a href="#">新浪微博</a>
							<a href="#">微信公众号</a>
							<a href="#">易信公众号</a>
							<span class="spliter"></span>
							<a href="#">招商合作</a>
							<a href="#">考拉招聘</a>
						</div>

					</li>
				</ul>
			</nav>
			<header id="docHead" class="cl">
				<div id="docHeadWrap" class="cl">
					<a href="../index/index.html" class="logokaola" title="网易考拉海购"></a>
					<div class="logo">
						<a class="logokaolalt" href="#"></a>
					</div>
					<div class="m-searchiptbox">
						<div id="topsearchbox">
							<div id="topsearch">
								<div class="search_wrap">
									<input id="topSearchInput" type="text" source="1" placeholder="惠氏妈妈" urllink="" actualkey="">
								</div><span id="topSearchBtn" class="w-icon w-icon-27"></span>
								<span class="w-icon w-icon-26"></span>
							</div>
							<div class="m-searchhint">
								<ul id="searchhintlist" style="display:none;"></ul>
							</div>
						</div>
						<ul class="m-suggestlist cl">
							<li>
								<a href="#" class="active">游戏充值</a>
							</li>
							<li>
								<span class="sep">|</span><a href="#">奶粉</a>
							</li>
							<li>
								<span class="sep">|</span><a href="#">马油</a>
							</li>
							<li>
								<span class="sep">|</span><a href="#">MK</a>
							</li>
							<li>
								<span class="sep">|</span><a href="#">麦片</a>
							</li>
							<li>
								<span class="sep">|</span><a href="#">LAMY</a>
							</li>
						</ul>
					</div>
					<a href="../carts/index.html" class="m-shopcart">
						<i class="iconfont icon-gouwuchekong"></i><span class="wrap">购物车<b class="num" id="newcartnum" style="display:none">0</b></span>
					</a>
				</div>
			</header>`),
			topTabBox:template.compile(`<nav id="topTabBox" class="cl" >

				<div id="topTab" class="cl">

					<ul id="funcTab" class="cl">

						<li><a href="../index/index.html">首页</a></li>
						<li><a href="../list/index.html">今日限时购</a></li>
						<li><a href="../list/index.html">每日上新</a></li>
						<li><a href="../list/index.html">国家馆</a></li>
						<li><a href="../list/index.html">全球旗舰</a></li>
					</ul>
				</div>
				<div class="toplevel">
					<div class="lineicon"><i></i><i></i><i></i></div><span>所有分类</span>
				</div>

				<ul class="mianSort">
					<li class="mainSort_ite">
						<img src="../img/iqkplg1m99_40_40.png" />
						<span class="t">母婴儿童<i class="iconfont icon-xiangyoujiantou"></i></span>

					</li>
					<li class="mainSort_ite">
						<img src="../img/iqkpnez751_40_40.png" />
						<span class="t">美容彩妆<i class="iconfont icon-xiangyoujiantou"></i></span>

					</li>
					<li class="mainSort_ite">
						<img src="../img/iqkpo5f994_40_40.png" />
						<span class="t">服饰箱包<i class="iconfont icon-xiangyoujiantou"></i></span>

					</li>
					<li class="mainSort_ite">
						<img src="../img/iqkpow3285_40_40.png" />
						<span class="t">家居个护<i class="iconfont icon-xiangyoujiantou"></i></span>

					</li>
					<li class="mainSort_ite">
						<img src="../img/iqkpq2ue80_40_40.png" />
						<span class="t">营养保健<i class="iconfont icon-xiangyoujiantou"></i></span>

					</li>

					<li class="mainSort_ite">
						<img src="../img/iqkpr75617_40_40.png" />
						<span class="t">海外直邮<i class="iconfont icon-xiangyoujiantou"></i></span>

					</li>
					<li class="mainSort_ite">
						<img src="../img/iqkpsh0e98_40_40.png" />
						<span class="t">数码家电<i class="iconfont icon-xiangyoujiantou"></i></span>

					</li>
					<li class="mainSort_ite">
						<img src="../img/iqkptd2291_40_40.png" />
						<span class="t">环球美食<i class="iconfont icon-xiangyoujiantou"></i></span>

					</li>
					<li class="mainSort_ite">
						<img src="../img/ir26dxt121_40_40.png" />
						<span class="t">运动户外<i class="iconfont icon-xiangyoujiantou"></i></span>

					</li>
					<li class="mainSort_ite">
						<img src="../img/iqsu18g169_40_40.png" />
						<span class="t">水果生鲜<i class="iconfont icon-xiangyoujiantou"></i></span>

					</li>
				</ul>
				<div class="imgNav cl" id="box">
					<ul id="list" class="cl">
						<li style="opacity: 1;">
							<a href="#1"><img src="../img/j0uxbofd78_1920_400.jpg"></a>
						</li>
						<li opacity: 0;>
							<a href="#2"> <img src="../img/j0uxcvbe71_1920_400.jpg"></a>
						</li>
						<li opacity: 0;>
							<a href="#3"><img src="../img/j0uxfaz126_1920_400.jpg"></a>
						</li>
						<li opacity: 0;>
							<a href="#4"><img src="../img/j0uxg3z883_1920_400.jpg"></a>
						</li>
						<li opacity: 0;>
							<a href="#5"><img src="../img/j0uxu6ty54_1920_400.jpg"></a>
						</li>
						<li opacity: 0;>
							<a href="#5"><img src="../img/j0uz7if150_1920_400.jpg"></a>
						</li>
					</ul>
					<ul id="btn" class="cl">
						<li class="active">1</li>
						<li>2</li>
						<li>3</li>
						<li>4</li>
						<li>5</li>
						<li>6</li>
					</ul>
					<div id="prev" class="button prev">
						<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 10 28">
				        	<path d="M0.703 15q0-0.203 0.156-0.359l7.281-7.281q0.156-0.156 0.359-0.156t0.359 0.156l0.781 0.781q0.156 0.156 0.156 0.359t-0.156 0.359l-6.141 6.141 6.141 6.141q0.156 0.156 0.156 0.359t-0.156 0.359l-0.781 0.781q-0.156 0.156-0.359 0.156t-0.359-0.156l-7.281-7.281q-0.156-0.156-0.156-0.359z" fill="#000000">
				            </path>
				        </svg>
					</div>
					<div id="next" class="button next">
						<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 10 28">
				        	<path d="M0.203 21.5q0-0.203 0.156-0.359l6.141-6.141-6.141-6.141q-0.156-0.156-0.156-0.359t0.156-0.359l0.781-0.781q0.156-0.156 0.359-0.156t0.359 0.156l7.281 7.281q0.156 0.156 0.156 0.359t-0.156 0.359l-7.281 7.281q-0.156 0.156-0.359 0.156t-0.359-0.156l-0.781-0.781q-0.156-0.156-0.156-0.359z" fill="#000000">
				            </path>
				        </svg>

					</div>
				</div>
				<article class="m-sellpoint cl">
					<section class="m-contentwrap f-cb cl">
						<div class="sellpoint f-cb cl">
							<a class="itm" href="#"><i class="iconfont icon-zheng"></i>100%正品</a>
							<a class="itm" href="#"><i class="iconfont icon-tui14"></i>30天无忧退货</a>
							<a class="itm" href="#"><i class="iconfont icon-you"></i>满88包邮（部分特殊商品除外）</a>
						</div>
						<div class="download"><i class="iconfont icon-shouji"></i><a href="#">领考拉1000元新人礼，APP下单更享手机价</a></div>
					</section>
				</article>
			</nav>
			<ul class="navPoster cl">
				<li><img src="../img/j0s45n7u50_265_220.jpg" /></li>
				<li><img src="../img/j0s44jje95_265_220.jpg" /></li>
				<li><img src="../img/j0tgrmff37_265_220.jpg" /></li>
				<li><img src="../img/j0tgs3sv82_265_220.jpg" /></li>
			</ul>`),
			rightSide:template.compile(`<ul class="cl fixFooter">
				<li>
					<a href="#">
						<i class="iconfont icon-hongqi"></i><span class="txt">签到</span>

					</a>
				</li>
				<li>
					<a class="shopcart" href="../carts/index.html" target="_blank"><i class="iconfont icon-gouwuchekong"></i><span class="txt">购物车</span><span class="num" style="visibility:hidden;">0</span></a>
				</li>
				<li>
					<a href="#">
						<i class="iconfont icon-shouji"></i><span class="txt">APP</span>
						<span class="qrcode"></span>
					</a>
				</li>
				<li>
					<a href="javascript:scrollTo(0,0);"><i class="iconfont icon-dingbu"></i><span class="txt">TOP</span></a>
				</li>
			</ul>`),
			leftSide:template.compile(`<aside class="LoutiNav">
				<a class="topImg" href="#"><img src="../img/ip50ucjr81_99_49.jpg" /></a>
				<ul class="channel">
					<li><a href="javascript:;">今日限时购</a></li>
					<li><a href="javascript:;">每日上新</a></li>
					<li><a href="javascript:;">热门品牌</a></li>
					<li><a href="javascript:;">母婴专区</a></li>
					<li><a href="javascript:;">美容彩妆</a></li>
					<li><a href="javascript:;">服饰鞋包</a></li>
					<li><a href="javascript:;">家居个护</a></li>
					<li><a href="javascript:;">营养保健</a></li>
					<li><a href="javascript:;">海外直邮</a></li>
					<li><a href="javascript:;">数码家电</a></li>
					<li><a href="javascript:;">环球美食</a></li>
					<li><a href="javascript:;">运动户外</a></li>

				</ul>

				<a class="bottomImg" href="#"><img src="../img/izgqdo7f9_99_128.jpg"></a>
			</aside>`),
			contentNav:template.compile(`<div id="contentNav">
				<div class="Louti f1">

					<h2 class="w-tit1 w-tit1-1 tit"><span class="big">今日限时购</span><a class="more" href="#">进入限时购频道&gt;</a></h2>
					<section class="cnt f-cb cl">
						<ul class="goodslist cl">
							<li class="goods f-cb">
								<a href="#" class="pic">
									<img src="../img/481e141c-015a-4dde-8b88-ce7b2533c6f1.jpg" />
								</a>
								<div class="detail">
									<h3 class="intro"><a href="#">罗莱公司荣誉出品</a></h3>
									<h3 class="shortTitle"><a href="#">LOVO 全棉水洗棉印花四件套 七色可选  韩式小清新</a></h3>
									<p class="price"><b>¥</b>349<span>¥</span><del>1580</del></p>
									<div class="process"><b style="width: 65.1%;"></b>
										<p class="text">剩余508件</p>
									</div>
									<a class="btn f-hover" href="../list/index.html">立即抢购</a>

								</div>
							</li>

							<li class="goods f-cb">
								<a href="#">
									<img src="../img/iryvgd1t97_800_800.jpg" />
								</a>
								<div class="detail">
									<h3 class="intro"><a href="#" >注重宝宝全面营养</a></h3>
									<h3 class="shortTitle"><a href="#"><b>4件装 | </b>Nutrilon 荷兰牛栏 婴儿奶粉3段 10个月以上 800克/罐 4罐装</a></h3>
									<p class="price"><b>¥</b>488<span>¥</span><del>700</del></p>
									<div class="process"><b style="width: 37.5%;"></b>
										<p class="text">剩余75件</p>
									</div>
									<a class="btn f-hover" href="../list/index.html">立即抢购</a>

								</div>
							</li>

							<li class="goods f-cb">
								<a href="#">
									<img src="../img/iwc3d8a324_800_800.jpg" />
								</a>
								<div class="detail">
									<h3 class="intro"><a href="#">磨毛的包裹，温暖一冬</a></h3>
									<h3 class="shortTitle"><a href="#" >网易严选 3色可选  日式色织磨毛四件套 </a></h3>
									<p class="price"><b>¥</b>269<span>¥</span><del>339</del></p>
									<div class="process"><b style="width: 71%;"></b>
										<p class="text">剩余544件</p>
									</div>
									<a class="btn f-hover" href="../list/index.html">立即抢购</a>
								</div>
							</li>
							<li class="goods f-cb">
								<a href="#" class="pic">
									<img src="../img/0d4619ce-f949-433b-80f8-bcb132d430a5.jpg" />
								</a>
								<div class="detail">
									<h3 class="intro"><a href="#" >休闲平底懒人豆豆鞋</a></h3>
									<h3 class="shortTitle"><a href="#"></a></h3>
									<p class="price"><b>¥</b>199<span>¥</span><del>864</del></p>
									<div class="process"><b style="width: 44.4%;"></b>
										<p class="text">剩余233件</p>
									</div>
									<a class="btn f-hover" href="../list/index.html">立即抢购</a>

								</div>
							</li>

						</ul>
						<aside class="aside">
							<a href="../list/index.html" class="pic"><img src="../img/j0d9lup691_221_378.jpg"></a>
						</aside>
					</section>
				</div>
				<div class="Louti f2">
					<h2 class="w-tit1 w-tit1-1"><span class="big">每日上新</span>全世界好物，0点更新<a class="more" href="#">进入新品频道&gt;</a></h2>
					<div class="itmBox">
						<ul class="f-cb itmWrap">
							<li class="itm itm-brand">
								<a href="#"><img class="logo" src="../img/ioxxu9ii6_120_120.jpg">
									<p class="desc">明星潮款 完美声学艺术</p>
									<p class="profix">领取30元尝鲜券</p>
								</a>
							</li>
							<li class="itm itm-pic">
								<a href="#"><img class="img" src="../img/j0sxazcy95_800_800.jpg"><b class="tri"></b><span class="mask"></span></a>
							</li>
							<li class="itm itm-goods">
								<a class="pic" href="#"><img src="../img/c85c9efc-0267-4fdf-8a52-1d20807d7702.jpg"></a>
								<a class="tit" href="#">北极光森鲜站 即食海参 约25克/个 速冻即食海参 一天一个更健康</a>
								<p class="price"><span class="cur">¥<b>9.9</b></span><span class="mkt">¥<del>23</del></span></p>
							</li>
							<li class="itm itm-goods">
								<a class="pic" href="#"><img src="../img/j0kr7lzl46_800_800.jpg"></a>
								<a class="tit" href="#">【海外仓发货】Panasonic 松下 温感卸妆泡沫洗脸多功能洁面仪 EH-SC5</a>
								<p class="price"><span class="cur">¥<b>649</b></span><span class="mkt">¥<del>699</del></span></p>
							</li>
							<li class="itm itm-goods">
								<a class="pic" href="#"><img src="../img/iyxtd3wd74_800_800.jpg" /></a><a class="tit" href="#">essenHERB爱仙赫泊金缕梅7</a>
								<p class="price"><span class="cur">¥<b>69</b></span><span class="mkt">¥<del>129</del></span></p>
							</li>
							<li class="itm itm-goods">
								<a class="pic" href="#"><img src="../img/ivaj7itt60_800_800.jpg"></a><a class="tit" href="#">【可儿设计款】SWAROVSKI </a>
								<p class="price"><span class="cur">¥<b>549</b></span><span class="mkt">¥<del>1069</del></span></p>
							</li>
							<li class="itm itm-goods">
								<a class="pic" href="#"><img src="../img/j0aq45vs94_800_800.jpg"></a><a class="tit" href="#">Dior 迪奥 玫瑰蕴采腮红 #001</a>
								<p class="price"><span class="cur">¥<b>325</b></span><span class="mkt">¥<del>460</del></span></p>
							</li>
							<li class="itm itm-goods">
								<a class="pic" href="#"><img src="../img/acbf5f60-9d04-4bc3-a575-5ada770d6362.jpg"></a><a class="tit" href="#">日本NITORI尼达利 1.2L扇形铁壶</a>
								<p class="price"><span class="cur">¥<b>179</b></span><span class="mkt">¥<del>179</del></span></p>
							</li>
							<li class="itm itm-goods">
								<a class="pic" href="#"><img src="../img/iwm3iwtc59_800_800.jpg" /></a><a class="tit" href="#">【17年早春度假系列】FURLA</a>
								<p class="price"><span class="cur">¥<b>1999</b></span><span class="mkt">¥<del>2980</del></span></p>
							</li>
							<li class="itm itm-goods">
								<a class="pic" href="#"><img src="../img/6d12da96-8aed-4030-9b87-00930b2977de.jpg"></a><a class="tit" href="#">Meiji/明治 保加利亚式酸奶低脂肪 清甜原味100克 16杯装 低脂酸奶</a>
								<p class="price"><span class="cur">¥<b>88.8</b></span><span class="mkt">¥<del>128</del></span></p>
							</li>
							<li class="itm itm-goods">
								<a class="pic" href="#"><img src="../img/j0rmw21929_800_800.jpg"></a><a class="tit" href="#">【跨境】Shell 壳牌 喜力 半合成机油 HX6 10W-40 5升</a>
								<p class="price"><span class="cur">¥<b>199</b></span><span class="mkt">¥<del>298</del></span></p>
							</li>
							<li class="itm itm-goods">
								<a class="pic" href="#"><img src="../img/iy1azl3v21_800_800.jpg"></a><a class="tit" href="#">gullón 谷优 低糖金黄脆饼干</a>
								<p class="price"><span class="cur">¥<b>26.9</b></span><span class="mkt">¥<del>59.9</del></span></p>
							</li>
						</ul>
					</div>
				</div>
				<div class="Louti f3">
					<h2 class="w-tit1 w-tit1-1"><span class="big">热门品牌</span>全球精选，一网打尽<a class="more" href="#">进入详情查看&gt;</a></h2>
					<section class="cnt f-cb">
						<div class="fixedBrandWrap">
							<ul class="fixedBrand f-cb">
								<li class="itm" style="opacity: 1; z-index: 10;">
									<a href="#"><img class="img" src="../img/iqnj9pz49_400_400.jpg">
										<div class="txt">
											<p class="name">la prairie 莱珀妮</p>
											<p class="desc">延缓衰老疗养中心的起源</p>
										</div>
									</a>
								</li>
								</div>
						<ul class="recomBrand f-cb">
							<li class="itm">
								<div class="info" style="width: 100%;"><img class="img" src="../img/ii71nh8j12_120_120.jpg">
									<p class="desc">70多个国家母婴界的信赖品牌</p>
								</div>
								<div class="mask"></div>
								<div class="actions"><a href="javascript:;" class="follow">+关注</a>
									<p class="followers">252459人关注该品牌</p><a class="enter" href="#">进入品牌&gt;</a></div>
							</li>
							<li class="itm">
								<div class="info" style="width: 100%;"><img class="img" src="../img/id0zwoz754.jpg">
									<p class="desc">来自法国的大牌辅食机</p>
								</div>
								<div class="mask"></div>
								<div class="actions"><a href="javascript:;" class="follow">+关注</a>
									<p class="followers">217467人关注该品牌</p><a class="enter" href="#">进入品牌&gt;</a></div>
							</li>
							<li class="itm">
								<div class="info" style="width: 100%;"><img class="img" src="../img/id1u5c2w1.jpg">
									<p class="desc">法国婴幼儿用品品牌</p>
								</div>
								<div class="mask"></div>
								<div class="actions"><a href="javascript:;" class="follow">+关注</a>
									<p class="followers">120136人关注该品牌</p><a class="enter" href="#">进入品牌&gt;</a></div>
							</li>
							<li class="itm">
								<div class="info" style="width: 100%;"><img class="img" src="../img/ii71o8pm45_120_120.jpg">
									<p class="desc">畅销海外的优质品牌</p>
								</div>
								<div class="mask"></div>
								<div class="actions"><a href="javascript:;" class="follow">+关注</a>
									<p class="followers">589238人关注该品牌</p><a class="enter" href="#">进入品牌&gt;</a></div>
							</li>
							<li class="itm">
								<div class="info" style="width: 100%;"><img class="img" src="../img/ie10423x4.jpg">
									<p class="desc">日本高质量电器品牌</p>
								</div>
								<div class="mask"></div>
								<div class="actions"><a href="javascript:;" class="follow">+关注</a>
									<p class="followers">21999人关注该品牌</p><a class="enter" href="#">进入品牌&gt;</a></div>
							</li>
							<li class="itm">
								<div class="info" style="width: 100%;"><img class="img" src="../img/id17u1iu5.jpg">
									<p class="desc">日本口碑厨房小家电</p>
								</div>
								<div class="mask"></div>
								<div class="actions"><a href="javascript:;" class="follow">+关注</a>
									<p class="followers">212906人关注该品牌</p><a class="enter" href="#">进入品牌&gt;</a></div>
							</li>
							<li class="itm">
								<div class="info" style="width: 100%;"><img class="img" src="../img/ic8p1ibz13.jpg">
									<p class="desc">德国“质”造，值得信赖</p>
								</div>
								<div class="mask"></div>
								<div class="actions"><a href="javascript:;" class="follow">+关注</a>
									<p class="followers">184022人关注该品牌</p><a class="enter" href="#">进入品牌&gt;</a></div>
							</li>
							<li class="itm">
								<div class="info" style="width: 100%;"><img class="img" src="../img/1111.jpg">
									<p class="desc">超薄、天然、柔软，透气</p>
								</div>
								<div class="mask"></div>
								<div class="actions"><a href="javascript:;" class="follow">+关注</a>
									<p class="followers">289326人关注该品牌</p><a class="enter" href="#">进入品牌&gt;</a></div>
							</li>
							<li class="itm">
								<div class="info" style="width: 100%;"><img class="img" src="../img/iglzia3975_120_120.jpg">
									<p class="desc">纸尿裤界畅销品</p>
								</div>
								<div class="mask"></div>
								<div class="actions"><a href="javascript:;" class="follow">+关注</a>
									<p class="followers">463400人关注该品牌</p><a class="enter" target="_blank" href="#">进入品牌&gt;</a></div>
							</li>
							<li class="itm">
								<div class="info" style="width: 100%;"><img class="img" src="../img/id1ud78m44.jpg">
									<p class="desc">美国著名的婴童用品品牌</p>
								</div>
								<div class="mask"></div>
								<div class="actions"><a href="javascript:;" class="follow">+关注</a>
									<p class="followers">64338人关注该品牌</p><a class="enter" href="#">进入品牌&gt;</a></div>
							</li>
						</ul>
					</section>
				</div>
				</div>`),
				docFoot:template.compile(`<footer id="docFoot">
				<div class="footBgWrap">
					<div class="box">
						<div id="btmlist">
							<ul class="cl">
								<li>
									<i class="w-icon w-icon-23">&nbsp;</i>
									<strong class="tit">100%正品</strong>
									<span class="desc">正品保障 假一赔十</span>
								</li>
								<li>
									<i class="w-icon w-icon-23 w-icon-23-1">&nbsp;</i>
									<strong class="tit">低价保障</strong>
									<span class="desc">缩减中间环节 确保低价</span>
								</li>
								<li>
									<i class="w-icon w-icon-23 w-icon-23-2">&nbsp;</i>
									<strong class="tit">30天无忧退货</strong>
									<span class="desc">国内退货 售后无忧</span>
								</li>
								<li class="last">
									<i class="w-icon w-icon-23 w-icon-23-3">&nbsp;</i>
									<strong class="tit">满88包邮</strong>
									<span class="desc">部分特殊商品除外</span>
								</li>
							</ul>
						</div>
						<div id="guideList">
							<ul class="cl">
								<li class="bd_none first">
									<a href="#" class="logokaola"></a>
									<div class="focuson">
										<span class="label">关注我们</span>
										<a class="itm" href="#">
											<img src="../img/wx.png"/>
											<span class="m-notice m-notice-1">
											<img src="../img/2dcode-wx.jpg" width="100px" height="100px">
										</a>
										<a class="itm nolink" href="javascript:void(0);" >
											<img src="../img/wb.png"/>
											<span class="m-notice">
											<img src="../img/2dcode-wb.jpg" width="100px" height="100px"/>

										</a>
										<a class="itm nolink" href="javascript:void(0);" rel="nofollow">
											<img src="../img/yx.png"/>
											<span class="m-notice m-notice-2">
											<img src="../img/2dcode-yx.jpg" width="100px" height="100px">

										</a>
									</div>
								</li>
								<li>
									<dl>
										<dt><em>考拉保障</em></dt>
										<dd><a target="_blank" href="#">假一赔十</a></dd>
										<dd><a target="_blank" href="#">廉正监督</a></dd>
									</dl>
								</li>
								<li>
									<dl>
										<dt><em>新手指南</em></dt>
										<dd><a href="#">购物流程</a></dd>
										<dd><a href="#">支付方式</a></dd>
										<dd><a href="#" >通关税费</a></dd>
										<dd><a href="#">常见问题</a></dd>
									</dl>
								</li>
								<li>
									<dl>
										<dt><em>售后服务</em></dt>
										<dd><a href="#" title="退货政策" >退货政策</a></dd>
										<dd><a href="#" title="退货流程" >退货流程</a></dd>
										<dd><a  href="#">退款说明</a></dd>
										<dd><a  class="j-openService">联系客服</a></dd>
									</dl>
								</li>
								<li>
									<dl>
										<dt><em>物流配送</em></dt>
										<dd><a href="#">配送方式</a></dd>
										<dd><a href="#" >配送服务</a></dd>
										<dd><a href="#">运费标准</a></dd>
										<dd><a href="#" >物流跟踪</a></dd>
									</dl>
								</li>
								<li>
									<dl>
										<dt><em>关于我们</em></dt>
										<dd><a  href="#" >联系我们</a></dd>
										<dd><a  href="#" >招商合作</a></dd>
										<dd><a  href="#" >销售联盟</a></dd>
										<dd><a  href="#" >CEO邮箱</a></dd>
									</dl>
								</li>
								<li class="bd_none item last">
									<img src="../img/2dcode-app.jpg" width="108px" height="108px">
									<span>扫描下载手机版</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div id="aboutNEST">
					<a href="#" >About NetEase</a> - 
					<a href="#">公司简介</a>	- 
					<a href="#">联系方法</a> - 
					<a href="#">友情链接</a> - 
					<a href="#">招聘信息</a> - 
					<a href="#" >客户服务</a> - 
					<a href="#" >隐私政策</a> -
					<a href="#">网络营销</a> - 
					<a href="#">网站地图</a> - 
					<a href="#">网易考拉海购</a>
						<br>
						<span class="m-license">网络文化经营许可证：浙网文[2016]0155-055号</span>
						<span class="m-license">增值电信业务经营许可证：浙B2-20090185-3</span>
						<span class="m-license">出版物经营许可证：新出发浙杭经零字第00136号</span>
						<span class="m-license">食品经营许可证：JY13301860112412</span>
						<br>
						<a  href="#" class="m-license m-license-1">
							<img src="../img/gs.png" />
						</a>
						<a  href="#">
							<span style="margin: 0px 0px 0px 5px;"> 浙公网安备 33010002000066号</span>
						</a>
						<span class="m-license">网易公司版权所有©1997-2017</span>
						<div class="f-tac"><span id="KXYZ"><a href="#" style="display:inline-block;">
							<img src="../img/gs1.png" />
							
						</span>
						<a class="u-shield" href="#">
							<img src="../img/gif.gif" />
						</a>
						</div>
				</div>
			</footer>`)
	        }
    }
})

