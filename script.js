






$(function(){


	$('.menu-btn').click(function(){
		$('li').eq(0).fadeOut();
		setTimeout(function(){$('li').eq(1).fadeOut();},100);
		setTimeout(function(){$('li').eq(2).fadeOut();},200);
		setTimeout(function(){$('li').eq(3).fadeOut();},300);
		setTimeout(function(){$('li').eq(4).fadeOut();},400);
		setTimeout(function(){$('li').eq(5).fadeOut();},500);
		
	});//クリックの閉じタグ

});//全体の閉じタグ
