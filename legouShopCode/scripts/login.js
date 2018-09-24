$(function() {
	//点击菜单切换
	$("#loginTit li").on("click", function() {
		//获取索引
		var index = $(this).index();
		//点击到哪个菜单上就为当前添加当前样式，兄弟移出当前样式
		$(this).addClass("current").siblings().removeClass("current");
		//点到哪个上面就获取相对应的内容
		$("#loginConts>div").eq(index).show().siblings().hide();
		//点击到二维码时自己展开
		if(index==0){
			$(erCode).animate({"left":"10px"},function(){
				$(phone).fadeIn(function(){
					$(phone).delay(3000).fadeOut(function(){
						$(erCode).animate({"left":"95px"});
					})
				});
			});
		};
	});

	//定义缓存变量保存值
	var erCode = $("#loginConts .mobileLogin #erCode");
	var phone = $("#loginConts .mobileLogin #phone");

	//二维码切换
	$(erCode).hover(function() {
		if(!($(erCode).is(":animated") || $(phone).is(":animated"))) {
			$(erCode).stop(true).animate({
				"left": "10px"
			}, function() {
				$(phone).fadeIn();
			})
		}
	}, function() {
		if(!($(erCode).is(":animated") || $(phone).is(":animated"))) {
			$(phone).stop(true).fadeOut(function() {
				$(erCode).animate({
					"left": "95px"
				});
			});
		}

	});

});