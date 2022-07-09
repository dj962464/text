$(window).scroll(function(){
	var scrollT=document.documentElement.scrollTop || document.body.scrollTop; 
	var backTop=$("#accessory").offset().top-390;
	if (scrollT>backTop) {
		$(".zuoa").addClass("animated fadeInLeft kai").removeClass("zhe");
		$(".youa").addClass("animated fadeInUp kai").removeClass("zhe");
//		$(".baobao img:eq(2)").addClass("animated fadeInDown kai").removeClass("zhe");
//		$(".baobao img:eq(3)").addClass("animated fadeInLeft kai").removeClass("zhe");
//		$(".zixun").addClass("animated fadeInRight kai").removeClass("zhe");
	}
	var startop=$("#world").offset().top-300;
	if (scrollT>startop) {
		$(".ctjr").addClass("animated flash kai").removeClass("zhe");
		$(".zgxj").addClass("animated rotateIn kai").removeClass("zhe");
		$(".yywz").addClass("animated rotateIn kai").removeClass("zhe");
		$(".hych").addClass("animated flipInX kai").removeClass("zhe");
		$(".zjtp").addClass("animated rotateIn kai").removeClass("zhe");
		$(".ygfs").addClass("animated rotateIn kai").removeClass("zhe");
	}
	var bannerTop=$("#serve").offset().top-500;
	if (scrollT>bannerTop) {
		$(".dg").addClass("animated tada kai").removeClass("zhe");
//		$(".zixun").addClass("animated flipInY kai").removeClass("zhe");

	}
	var afterTop=$("#after_sale").offset().top-500;
	if (scrollT>afterTop) {
		$(".jse").addClass("animated tada kai").removeClass("zhe");
//		$(".zixun").addClass("animated flipInY kai").removeClass("zhe");

	}
	var yiTop=$("#after_sale").offset().top+200;
	if (scrollT>yiTop) {
		$(".yi").removeClass("lfd");
		$(".addfe").addClass("animated flipInY kai");

	}
	
	
	
	var footerTop=$("#footer").offset().top-500;
	if (scrollT>footerTop) {
		$(".wewewewe").addClass("animated flash kai").removeClass("zhe");
//		$(".zixun").addClass("animated flipInY kai").removeClass("zhe");

	}
	
//	if (scrollT>1760) {
//	//	$(".aaa").addClass("animated flipInY kai").removeClass("zhe");
//		$(".zixun").addClass("animated flipInY kai").removeClass("zhe");
//
//	}
});