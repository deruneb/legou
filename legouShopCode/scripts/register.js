$(function(){
	//二维码领劵
	$("#QRcode #twoCode").hover(function(){
		$("#QRcode #twoCode i").stop(true).animate({"width":"101"});
	},function(){
		$("#QRcode #twoCode i").stop(true).animate({"width":"0"});
	});
});

//自定义验证属性
jQuery.validator.addMethod("isMobile", function(value, element) {
    //自定义的验证规则
    var mobile = /^0?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$/;
    //返回验证的结果
    return this.optional(element) || (mobile.test(value));
}, "手机号码格式错误");
//调用验证方法验证表单
$("#regForm").validate({
	//验证规则
	rules:{
		username:{
			required:true  
		},
		pwd:{
			required:true 
		},
		confirmPwd:{
			required:true,
			equalTo:"#pwd"
		},
		mobile:{
			required:true, 
			isMobile:true
		}
	},
	//错误提示信息
	messages:{
		username:{
			required:"用户名必须填写"  
		},
		pwd:{
			required:"密码必须填写"
		},
		confirmPwd:{
			required:"确认密码必须填写", 
			equalTo:"两次输入密码必须与一致"
		},
		mobile:{
			required:"手机号必须填写"
		}
	}
});
