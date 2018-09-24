$(function () {
	//主轮播图的配置
	$("#mainBanner").tyslide({
			boxh:420,//盒子的高度
			w:1000,//盒子的宽度
			h:390,//图片的高度
			isShow:true,//是否显示控制器
			isShowBtn:true,//是否显示左右按钮
			controltop:0,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
			controlsW:22,//控制按钮宽度
			controlsH:22,//控制按钮高度
			radius:11,//控制按钮圆角度数
			controlsColor:"#D9D9D9",//普通控制按钮的颜色
			controlsCurrentColor:"#FF6700",//当前控制按钮的颜色
			isShowNum:true //是否显示数字
	});
	//主分类菜单
	$("#classify .menu li").hover(function(){
		//鼠标移入
		$(this).find("div").addClass("current").next().show();
	},function(){
		//鼠标移出
		$(this).find("div").removeClass("current").next().hide();
	});
	
	//电子书轮播图1-3
	//电子书3个轮播
	$(".ebookBanner").tyslide({
			boxh:218,//盒子的高度
			w:330,//盒子的宽度
			h:218,//图片的高度
			isShow:true,//是否显示控制器
			isShowBtn:true,//是否显示左右按钮
			controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
			controlsW:10,//控制按钮宽度
			controlsH:4,//控制按钮高度
			radius:0,//控制按钮圆角度数
			controlsColor:"#ffffff",//普通控制按钮的颜色
			controlsCurrentColor:"#7F7F7F",//当前控制按钮的颜色
			isShowNum:false //是否显示数字
	});
	//服装,运动,童装轮播图
	$(".clothBanner").tyslide({
			boxh:340,//盒子的高度
			w:426,//盒子的宽度
			h:340,//图片的高度
			isShow:true,//是否显示控制器
			isShowBtn:true,//是否显示左右按钮
			controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
			controlsW:10,//控制按钮宽度
			controlsH:4,//控制按钮高度
			radius:0,//控制按钮圆角度数
			controlsColor:"#ffffff",//普通控制按钮的颜色
			controlsCurrentColor:"#7F7F7F",//当前控制按钮的颜色
			isShowNum:false //是否显示数字
	});
	
	//电子书tab滑动菜单
	$("#ebook #leftCon .tit li").on("mouseover",function(){
		//获取菜单索引
		var i = $(this).index();
		//鼠标移入哪个菜单就添加current样式，兄弟移出current
		$(this).addClass("current").siblings().removeClass("current");
		//鼠标移入哪个菜单就让对应的内容显示，其他的兄弟内容隐藏
		$("#ebook .subRight .tabContent").eq(i).show().siblings().hide();
	});
	
	//服装，户外，童装tab滑动菜单
	$(".tit li").on("mouseover",function(){
		//获取菜单索引
		var i = $(this).index();
		//鼠标移入哪个菜单就添加current样式，兄弟移出current
		$(this).addClass("current").siblings().removeClass("current");
		//鼠标移入哪个菜单就让对应的内容显示，其他的兄弟内容隐藏
		$(this).parent().parent().parent().find(".goodsContent .box962").eq(i).show().siblings().hide();
	});
	
	//书籍排行榜交互效果
	$("#rightRank ul li").on("mouseover",function(){
		//鼠标移动到哪个li上，让它里面的图片显示，标题隐藏
		$(this).find(".rankImg").show().next().hide();
		//让li兄弟显示标题
		$(this).siblings().find(".rankImg").hide().next().show();
	});
	
	//推广商品tab交互
	$("#promotion .tit ul li").on("click",function(){
		//获取索引
		var i = $(this).index();
		//点击哪个菜单，就给当前菜单添加current样式,兄弟移除样式
		$(this).addClass("current").siblings().removeClass("current");
		//让菜单对应索引的内容通过透明度显示，其他内容兄弟隐藏
		$("#promotion .promotionConts>div").eq(i).fadeIn().siblings().hide();
	});
	
	//二维码领劵
	$("#QRcode #twoCode").hover(function(){
		$("#QRcode #twoCode i").stop(true).animate({"width":"101"});
	},function(){
		$("#QRcode #twoCode i").stop(true).animate({"width":"0"});
	});
	
	//固定搜索栏
	$(window).on("scroll",function(){
		var scrTop = $(this).scrollTop();
		if(scrTop>=300){
			$("#logoImg").after($("#search").removeClass("fr").addClass("fl"));
			$("#fixedSearch").slideDown();
		}else{
			$("#fixedSearch").slideUp(100,function(){
				$("#cart").after($("#search").removeClass("fl").addClass("fr"));
			});
		}
	});
	
	//楼层移入移出事件
	var floorColor = ["#ff00ae","#93d46f","#9600ff","#0012ff","#00ccff","#00ff96","#00ff00","#ff0000"];
	var floorText = ["推荐","图书","服装","运动","童装","家居","推广","顶部"];
	$("#floor li").hover(function(){
		var index = $(this).index();	
		$(this).css("background-color",floorColor[index]);
		$(this).html("<span>"+floorText[index]+"</span>");
		$(this).stop(true).animate({
			"width":"80px",
			"background-position-x":"-40px"		
		},300);
	},function(){
		$(this).css("background-color","#f2f2f2");
		$(this).html("");
		$(this).stop(true).animate({
			"width":"40px",
			"background-position-x":"0px"		
		},200);
	});
	//回到顶部
	$("#floor li:last-child").on("click",function(){
		$("html,body").animate({"scrollTop":"0"},500);
	});
	//楼层效果
	$("#floor li:not(:last)").on("click",function(){
		var index = $(this).index();
		var topval = $(".floor").eq(index).offset().top;
		topval+=530;
		$("html,body").animate({"scrollTop":topval},500);
	});
});