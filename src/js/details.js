define(['jquery', 'template', 'home','getinfo'], function($, template, home,getinfo) {
	
	return {
		init: function() {
			$('body').append('<div class="all"/>');
			home.init();
			home.addnavHeader();
			home.addrightSide();
			this.bind();
			$('.all').append(this.template.navdetails());
			home.adddocFoot();
			return this;
			
			

		},
		bind: function() {
				
					$(document).on("click","#add",function(){
						
					  var t = $("#text_box");
					//初始化数量为1,并失效减
					$('#min').attr('disabled',true);
					    //数量增加操作
			         t.val(parseInt(t.val())+1)
			           if (parseInt(t.val())!=1){
					        	
					            $('#min').attr('disabled',false);
					        }
					});
					$(document).on("click","#min",function(){
						 var t = $("#text_box");
					//初始化数量为1,并失效减
					$('#min').attr('disabled',true);
					  t.val(parseInt(t.val())-1);
					    //数量增加操作
			     
			            if (parseInt(t.val())==1){
					            $('#min').attr('disabled',true);
					        }
					});
					 
					
					   
					   
					
			
			 		var $id = getinfo.Getinfo("id");
    				console.log($id);
			 		$.get('../api/getdetails.php?id=' + $id, function(data) {
			 			$.getScript("../lib/magiczoom/magiczoom.js");
					
					if($.cookie('logging')){
						var str = $.cookie('logging');
						$('.login').html(str +`	
						<a href="#" class="exit" style="margin-left:4px">[退出]</a>`)
						$('.reg').css('display','none')
					}
					 $('.exit').on('click',function(){
						setTimeout(function(){
								$.cookie('logging',"",{expires:7, path:"/"});
								window.location.href='/project/src/login/index.html';
						},1000)
						return false;
					});
						
						$(document).on("click","#addCart",function(){
					  	$.post('../api/addtocart.php',{'uid':location.search.slice(1),'goodid':$id},function(res){
					  		if(res == 'success'){
					  			alert('成功加入购物车成功')
					  		}
					  	})
					});
					data.forEach((item) => {
						
					
						var $div = $('<div/>');
						$div.addClass('f-cb');
						$div.addClass('crumbs');
						
						$div.html(`
							 <a href="../index/index.html">网易考拉海购</a>&nbsp;&gt;&nbsp;<span class="ellipsis crumbs-title">${item.goodsName}</span>
						    <span class="ellipsis m-shopname f-vama">
     						<img class="u-jxtag" src = "../img/zz.png" >
						        <img class="u-jxtag" src="../img/bao.png">
						      <a  href="#"  class="name f-toe">
						       ${item.goodsSroll}
						      </a>
						      <a class="link"  href="#">进店看看&gt;</a>
						    </span>
							`)
						var $div1 = $('<div/>');
						$div1.addClass('PInfoWrap');
						$div1.addClass('cl');
						$div1.html(`<div class="PImgBox m-productimgbox">
							  <div id="showImgBox">
							        <a href=" ${item.goodsBig}" class="MagicZoom"><img src="${item.goodsBig}"/></a>

							  </div>
							<div class="active" style="width:79px;height:79px">
							<a href="#"><img src="${item.goodsImg}" style="width:64px;height:64px"></a>
							</div>
							</div>
						<dl class="PInfo PInfo-standout">
						    <dt class="orig-country">
						      <img src="../img/iczu.png">
						      <span>中国</span>
						      <span class="split">|</span>
						      <a class="brand" href="#">百年栗园</a>
						    </dt>
						    <dt class="product-title">
						      <span>百年栗园&nbsp;${item.goodsName}</span>
						    </dt>
						    <dt class="subTit">源自首农&nbsp;百年栗园&nbsp;${item.goodsName}</dt>
						    <dd class="m-price-wrap">
								  <div class="m-price">
								  <span class="m-line-title m-price-title j-price-title">
								      售价
								  </span>
								  <div class="m-price-cnt">
								      <span class="PInfo_r currentPrice">¥<span>${item.goodsPrice}</span></span>
								      <span class="m-memberLabel">${item.goodsDiscount}</span> 
								    </span>
								  </div>
								</div>	
						    </dd>
						   
						
						      <dd class="postage cl">
						        <span class="m-line-title">运费</span>
						        <div class="msg">
						          <span> 
						          <span class="from">北京 </span>
						           <span class="from">至</span>
						            <div class="mr20 m-addrw">
						  <div class="m-addr">
						
						    <div class="iptw">
						      <span class="iptmsg" title="广东/广州市/荔湾区">广东/广州市/荔湾区</span>
						      <span class="iptdown icon-tridown"></span>
						    </div>
						
						  
						
						  </div>
						</div>
						          </span>
						          <span class="feeInfo"> 
						            <span class="feeTxt"><span class="postagedesc">本地区免运费</span></span>
						          </span>
						        </div>
						      </dd>
						        <dd class="m-service f-cb">
						          <span class="m-line-title f-fl">服务</span>
						          <span class="send">
						            本商品由 
						              <a class="shopname"  href="#">${item.goodsSroll}</a>
						            
						             发货
						          </span>
						        </dd>
						        
						      
						  <dd class="buyBox j-skubox nosku" id="js_skuBox">
						        <div>
						  <form action="#" method="post">
						<span class="m-line-title fl m-line-am-30">数量</span>
						<em name="js_buyBox" class="buybox" id="j_buyboxnum">
						  <span class="ctrnum-wrap">
						    <input id="min" name="" type="button" value="-" disabled="disabled">
						    <input id="text_box" name="" type="text" value="1" style="width:30px;">
						    <input id="add" name="" type="button" value="+">
						  </span>
						</em>
						    <div class="buyBtns">
						        <a id="buyBtn" hidefocus="true" href="javascript:void(0)" class="">立即购买</a>
						          <a href="javascript:void(0);" id="addCart" hidefocus="true" class="">加入购物车</a>
						<a class="m-favbtn m-favbtn-s" href="javascript:void(0)" style="visibility: visible;">
						  
						  <i class="iconfont ic icon-heart-hollow"></i>
						  <span class="txt">收藏</span>
						</a>
						<div class="buynowonly-wrap">
						  <ul class="buynowonly-tip-lis point">
						    <!--Regular list-->
						      <li><i></i>不支持7天无理由退货</li>
						    
						  </ul>
						</div>
						    </div>
						  </form>
						        </div>
						
						</dd>
						 <dd class="m-taxrateline f-cb m-taxrateline-2 cl">
							    <span class="m-line-title f-fl cl">税费</span>
							    <div class="descwrap f-fl cl">
							      <div class="taxmsg">
							        <span><b class="warn">【本商品包税】</b>无需额外交税</span>
							      </div>
							    </div>
						  </dd>
								
						</dl>
							`)
						$('#j-producthead').append($div);
						$('#j-producthead').append($div1);
					})
					
				}, 'json');
			
			 	  
					    
					    
					 	
		},
		template: {
			navdetails: template.compile(`<article class="mainWrap z-nomprice">
			
			  	<div id="j-producthead">		
 				</div>
			</article>`)
		}
	}
})