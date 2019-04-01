$(function(){
	height();
	animation();
	ctrl();
	nav();
	changePage();
});
function height(){
	$(".page-all").height($(window).height());
}
function animation(){
	$(".page-item:not(.item1)").each(function(i){
		$(this).addClass(getClassName(i));
	});
}
function getClassName(number){
	var className=['leftToRight','slideDown'];
	return className[number%className.length]
}
var index=1;
function ctrl(){
	var total=$(".page-item").size();
	
	$(".ctrl .prev").click(prev);
	$(".ctrl .next").click(next);

	$(window).keydown(function(e){
		var keyCode=e.keyCode;
		if(keyCode==37||keyCode==38){
			prev()
		}else if(keyCode==39||keyCode==40){
			next()
		}
	});
	function prev(){
		index--;
		if(index<1){
			index=1;
			return;
		}
		$(".item"+index).show().siblings().hide();
		changeHash(index);
	}
	function next(){
		index++;
		if(index>total){
			index=total;
			return;
		}
		$(".item"+index).show().siblings().hide();
		changeHash(index);
	}
}
function toPage(pageNo){
	index=pageNo;
	$(".item"+pageNo).show().siblings().hide();
	 changeHash(pageNo);	
}
function nav(){
	 $(".nav li").click(function(i){
	 	var pageNo=$(this).data('page');
	 	toPage(pageNo);
	 });
}
function changePage(){
	var page=window.location.hash;
	if(page){
		var pageNo=parseInt(page.slice(1));
		if(pageNo){
			toPage(pageNo);
		}
	}
}
function changeHash(pageNo){
	window.location.hash=pageNo;
}