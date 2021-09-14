
/*大的轮播图（第一个轮播图）*/
var timer = 0;
var index = 0;
var $left = $("#left");
var $right = $("#right"); 
var $lunbotu = $("#lunbotu");
var $input = $(".input");
function player1(){
	timer=setInterval(function(){
		var $lunbo_imgs = $(".lunbo_imgs").find("img");
		$lunbo_imgs.fadeOut();
		index++;
		if (index==5) {
			index=0;
		}
		$lunbo_imgs.eq(index).fadeIn();
		$input.find("span").eq(index).css({"background":"#E5004F"});
		$input.find("span").eq(index).siblings().css({"background":"#211616"});
	},2000);
}
player1();

$lunbotu.hover(function(event){
		clearInterval(timer);
		$left.show();
		$right.show();
},function(event){
	player1();
	if($lunbotu.get(0).contains(event.relatedTarget)){
		clearInterval(timer);
		$left.show();
		$right.show();
	}else if(event.relatedTarget ===$("#left").get(0) ||event.relatedTarget ===$("#right").get(0)){
		clearInterval(timer);
		$left.show();
		$right.show();
	}else{
		$left.hide();
		$right.hide();
	}
});

$right.click(function(){
	$(".lunbo_imgs").find("img").eq(index).fadeOut();
	index++;
	if (index==5) {
			index=0;
		}
	$(".lunbo_imgs").find("img").eq(index).fadeIn();

	$(".input").find("span").eq(index).siblings().css({"background":"#211616"});
	$(".input").find("span").eq(index).css('background', 'rgb(229, 0, 79)')
});

$left.click(function(){
	$(".lunbo_imgs").find("img").eq(index).fadeOut();
	if (index==0) {
		index=5;
	}
	index--;
	$(".lunbo_imgs").find("img").eq(index).fadeIn();
	$(".input").find("span").eq(index).siblings().css({"background":"#211616"});
	$(".input").find("span").eq(index).css('background', 'rgb(229, 0, 79)')
});

$input.find("span").hover(function(event){
	var _index = $(event.target).index();
	index=_index;
	$(this).css({"background":"#E5004F"});
	$(this).siblings().css({"background":"#211616"});
	$(".lunbo_imgs").find("img").eq(_index).siblings().fadeOut();
	$(".lunbo_imgs").find("img").eq(_index).fadeIn();
});


/*1楼轮播*/
var time2=0;
var index2=0;
var $floorxiaoimg = $(".floorxiao").find("a");
var $floor1_c_lunbo_left = $(".floor1_c_lunbo_left");
var $floor1_c_lunbo_right = $(".floor1_c_lunbo_right");
$floor1_c_lunbo_right.click(function(){
	$floorxiaoimg.eq(index2).css({"margin-left":"-390px"});
	if(index2>0){
		$floorxiaoimg.eq(0).appendTo($(".floorxiao"));
		$floorxiaoimg.eq(0).css({"margin-left":"0px"});
		$floorxiaoimg.eq(1).appendTo($(".floorxiao"));
		$floorxiaoimg.eq(1).css({"margin-left":"0px"});
	}
	index2++;
	if(index2==2){
		index2=0;
	}
});

/*原生js，header部分的"我的银泰"，下拉效果*/
var _myyintai=document.getElementById("myyintai");
function player(){
	_myyintai.onmouseover=function(){
		this.children[1].style.display="block";
		this.children[1].style.zIndex=9;
		this.children[1].style.position="absolute";
		this.children[1].style.background="#fff";
		/*this.children[1].children.children.style.color="#666666";*/
	}
	_myyintai.onmouseout=function(){
		this.children[1].style.display="none";
	}
}
player();


/*二级菜单显示*/
var $nav = $("#nav");
var $li = $nav.find("li");
$li.hover(function(event){
	$li.append($("#nav_menu"));
	 if(!event.relatedTarget || event.relatedTarget !== this && !this.contains(event.relatedTarget)){
	 	$(this).find("#nav_menu").show();
	 }
},function(event){
	$("#nav_menu").remove();
	if(!event.relatedTarget || event.relatedTarget !== this && !this.contains(event.relatedTarget)){
	 	$(this).find("#nav_menu").hide();
	 }
});

/*第一个Tab切换*/
var $tab1_biaoti_li = $(".tab1_biaoti").find("li");
var $tab1_left_centerdiv = $(".tab1_left_center").find("div");
$tab1_biaoti_li.mouseover(function(event){
	var index = $(this).index();
	$tab1_left_centerdiv.eq(index).show();
	$tab1_left_centerdiv.eq(index).siblings().hide();
});

/*第二个Tab切换*/
var $tab2_biaoti_li = $(".tab2_biaoti").find("li");
var $tab2_zgtk_r_content_div = $(".tab2_zgtk_r_content").find("div");
$tab2_biaoti_li.bind("mouseover",function(event){
	var index = $(this).index();
	$tab2_zgtk_r_content_div.eq(index).show();
	$tab2_zgtk_r_content_div.eq(index).siblings().hide();
});


/*楼梯效果*/
var $float_nav = $(".float_nav");
var $floor = $(".floor");
var client_height = $(window).height();
$(document).scroll(function(event){
	var doc_top = $(this).scrollTop();
	if(doc_top > client_height){
		$float_nav.fadeIn();
	}else {
		$float_nav.fadeOut();
	}
	$floor.find(".louceng").each(function(index,elem){
		var rel_top = $(elem).offset().top;
		if(doc_top>=(rel_top -  client_height/2)){
			$float_nav.find("a").removeClass("active");
			$float_nav.find("a").eq(index).addClass("active");
		}
	});
});
$float_nav.find("a").not(".float_nav_last").click(function(event){
	var index = $(this).index();
	var $cur_Module = $floor.find(".louceng").eq(index);
	var $cur_top = $cur_Module.offset().top;
	$("body").animate({
		scrollTop : $cur_top
	},200);
});
$(".float_nav_last").click(function(event){
	$("body").animate({
		scrollTop : 0
	},500);
});
/*详情页的Tab切换*/
var $xiangqing_left_ul = $(".xiangqing_left_ul");
var $number = $(".number"); 
$xiangqing_left_ul.find("li").click(function(event){
	event.preventDefault();
	var indexnum = $(this).index();
	$number.eq(indexnum).css({"display":"block"});/*"position":"absolute","top":"0px"*/
	$number.eq(indexnum).siblings().css("display","none");
});

/*dangq_top>1000时，在顶部出现*/
var $xq_head = $(".xq_head");
$(document).scroll(function(event){
	event.preventDefault();
	var dangq_top = $(this).scrollTop();
	if (dangq_top>1000) {
		$xq_head.css({"position":"fixed","top":"0px","z-Index":10001,"background-color":"#999","height":"30px"})
		$xq_head.children().css("background-color","#999")
	} else {
		$xq_head.css({"position":"relative","top":"0px"});
	}
});


/*添加数量*/
var $c_num=$(".c_num");
var c_numval=parseInt($c_num.text());
var $num_add=$(".num_add");
$num_add.click(function(event){
	c_numval++;
	$c_num.text(c_numval);
	localStorage.setItem('shuliang',c_numval);
});

var $num_jian=$(".num_jian");
$num_jian.click(function(event){
	if(c_numval!=1){
		c_numval--;
		$c_num.text(c_numval);
	}else{
		c_numval=1;
	}
	localStorage.setItem('shuliang',c_numval);
});


/*选择包的颜色*/
var $bao=$(".bao");
var $baoimgs=$bao.find("a");
$baoimgs.click(function(event){
	event.preventDefault();
	//var indeximg=$(this).index();
	$(this).css("border","1px solid #E5004f");
	$(this).siblings().css("border","1px solid #999");
});

/*尺寸的选择*/
var $choice_chicun=$(".choice_chicun");
$choice_chicun.find("a").click(function(event){
	event.preventDefault();
	//debugger;
	$(this).css("border","1px solid #E5004f");
});


/*页面跳转*/
var $addshoppingcar=$('.addshoppingcar');
$addshoppingcar.click(function(event){
	window.location='shoppingcar.html';
});



/*********************当点击商品时，记录当前商品的ID号***************************/
/*var $tab1_neirong_temai_a = $(".tab1_neirong_temai").find("a");
$tab1_neirong_temai_a.click(function(){
	var idkey = $(this).attr("id");
	localStorage.setItem("idkey",idkey);
});
*/












