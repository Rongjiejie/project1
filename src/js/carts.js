define(['jquery', 'template', 'home','AjaxBase','cookie'], function($, template, home,AjaxBase,cookie) {

	return {
		init: function() {
			$('body').append('<div class="all"/>');
			home.init();
			home.addnavHeader();
			$('.all').append(this.template.navcarts());

			home.adddocFoot();
			
			this.bind();
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
					 			
						
		},
		template: {
			navcarts: template.compile(`<article class='mainWrap'>
				<div id="cartbox">
  <h3 class="m-mycart">
    <span class="tt">我的购物车 </span>
  </h3>
  
  <div class="m-cartbox">
    <form class="f-dn" id="cartForm" action="/order/confirm.html?from=cart" method="post"></form>
    <div class="head f-cb">
      <div class="col col1"><input type="checkbox" class="u-chk" name="selectAll" id="selectAll" checked="checked"><label for="selectAll" class="lab">全选</label> </div>
      <div class="col col2">商品信息</div>
      <div class="col col3">单价(元)</div>
      <div class="col col4">数量</div>
      <div class="col col5">金额(元)</div>
      <div class="col col6">操作</div>
    </div>
<div class="m-cart  ">
  <div class="goods">
    <ul class="m-goods">
<li data-err="0" class="gooditm z-selected">
  <div class="col col0">
    <input type="checkbox" class="u-chk" name="selectGood" checked="checked">
    
  </div>
  <div class="col col2">
    <a href="#"  class="imgwrap"><img src="../img/list1.jpg"></a>
    <div class="txtwrap">
      <h3 class="goodtlt"><a href="#">泓易 墨西哥牛油果 6个 单果140-190克 包邮</a></h3>
    </div>
  </div>
  <div class="col col3">
    <span class="newprice">78.00</span>
  </div>
  <div class="col col4">
		<input id="min" name="" type="button" value="-" disabled="disabled">
	    <input id="text_box" name="" type="text" value="1" style="width:30px;">
	    <input id="add" name="" type="button" value="+">
</span>

  </div>
  <div class="col col5">
    <span class="sum sumrow">78.00</span>
    
  </div>
  <div class="col col6">
    <a class="u-opt">删除</a>
    <span class="u-opt">移入我的收藏</span>
  </div>

    </ul>
  </div>
</div>
    <div class="totalbox">
      <div class="m-total f-cb cl" id="totalbar">
        <div class="ttbar cl">
          <div class="lt">
            <input type="checkbox" name="selectAll" id="selectAll" class="u-chk" checked="checked"><label for="selectAll" class="lab">全选</label><b class="opt">删除选中商品</b>
          </div>
          <div class="rt">
            <p class="allgoods">已选商品 <em class="num">1</em> 件 <span class="itm">总价(不含运费)：<em class="num">￥78.00</em></span></p>
            <a class="gobuy ">去结算</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</article>`)
		}
	}
})