define(['jquery', 'template', 'home','getinfo'], function($, template, home,getinfo) {

	return {
		init: function() {
			$('body').append('<div class="all"/>');
			home.init();
			
			home.addnavHeader();
			home.addrightSide();
			$('.all').append(this.template.navlist());
			home.adddocFoot();
			this.bind();
			return this;
			

		},
		bind: function() {
			$(window).scroll(function() {
					var $scrollTop = $(document).scrollTop();
					if ($scrollTop >= 700) {

						$('.fixFooter').addClass('_fixFooter');

					} else {
						$('.fixFooter').removeClass('_fixFooter');
					}
				})
				$.get('../api/getlists.php', function(data) {
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
					console.log(data);
					data.forEach((item) => {
						var $li = $('<li/>');
						$li.addClass('goods');
						$li.html(`
						      <div class="goodswrap">
						        <div class="img">
						          <a target="_blank" title="${item.goodsName}" href="../details/index.html?id=${item.goodsId}">
						          
						          <img src = "${item.goodsImg}" class="imgtag">
						           
						          </a>
						        </div>
						        <div class="desc cl">
						          <p class="price">
						            <span class="cur"><i>¥</i>${item.goodsPrice}</span>
						            <b class="combinedLabel">${item.goodsDiscount}</b>
						            <span class="marketprice">¥<del>${item.goodsCostprice}</del></span>
						          </p>
						          <div class="titlewrap">
						            <a class="title" href="../details/index.html?id=${item.goodsId}" target="_blank"><h2>${item.goodsName}</h2></a>
						          </div>
						          <p class="goodsinfo cl">
						            <a  href="../details/index.html?id=${item.goodsId}" class="comments"><span class="icon"></span>${item.goodsSassess}</a>
						            <span class="proPlace ellipsis">中国</span>
						          </p>
						          <p class="selfflag">
						            <a href="../details/index.html?id=${item.goodsId}" >
						              <img class="shoptaglogo" src="../img/z">${item.goodsSroll}</a>
						          </p>
						        </div>
						      </div>`)
						
						$("#result").append($li);
					})
					
					
				}, 'json');
		},
		template: {
			navlist: template.compile(`<div class="listWrap">
				<div class="opertaion">
				<div class="m-filter cl">
					<div class="hdorder cl" id="order">
			      <dl class="order">
			        <dd class="jtag active">
			          <span>综合</span>
			        </dd>
			        <dd class="jtag">
			          <span>销量</span>
			        </dd>
			          <dd class="jtag">
			              <span>新品</span>
			          </dd>
			        <dd class="jtag">
			          <span>价格</span>
			        </dd>
			      </dl>
			      <div class="m-priceBox">
			          <div class="priceInputs">
			            <label>
			                <input id="priceStart" placeholder="¥" class="ipt jtag" type="text" value="">
			            </label> -
			            <label>
			              <input id="priceEnd" placeholder="¥" class="ipt jtag" type="text" value="">
			            </label>
			            <button class="btn jtag" id="auto-id-1491439634475">确定</button>
			          </div>
			      </div>
			      <div id="addr" class="m-addrbox f-cb"><span class="tit">收货地</span><div class="addrselect m-addrw">
			  <div class="m-addr">
			
			    <div class="iptw">
			      <span class="iptmsg" title="广东/广州市/荔湾区">广东/广州市/荔湾区</span>
			      <span class="iptdown icon-tridown"></span>
			    </div>
			  </div>
			</div></div>
			      <label class="m-checkbox ">
			      <a href=#>
			        <span class="box"><em></em></span><span>自营商品</span>
			        </a>
			      </label>
			      <label class="m-checkbox jtag" >
			        <span class="box"><em></em></span><span>有货商品</span>
			      </label>
			      <label class="m-checkbox jtag">
			        <span class="box"><em></em></span>
			        <span>促销商品</span>
			      </label>
			      <div class="simplePage">
			        <span class="num"><i>1</i>/2</span>
			        <span class="arrow-left def-left"><</span>
			        <a href="#" class="arrow-right">></a>
			      </div>
			    </div>
			  </div>
				</div>
				
			<div class="m-result" id="searchresult">
				<ul class="cl" id="result">
		  	</ul>
		    
			</div>
			    </div>`)
		}
	}
})