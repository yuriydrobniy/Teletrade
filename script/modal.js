
(function($){
$(function(){
/**/
	$('.link_popup').css({'cursor':'pointer', 'position':'relative'}).on('click', function()
	{
		$('.grey_popup').css(
		{
			'width':'100%',
			'height':'100%',
			'background-color':'rgba(0,0,0,0.5)',
			'overflow':'hidden',
			'position':'fixed',
			'top':'0px'
		});
		var win_width=$(window).width();
		var win_height=$(window).height();
		$('<div class:"popup">').appendTo('.grey_popup').css(
		{
			background:'url(image.png) no-repeat center',
			position:'absolute',
			top:+(win_height-400)/2+'px',
			left:+(win_width-400)/2+'px',
			border: '2px solid black'
		}).height(400).width(400).fadeIn("slow");
	});
/**/	
});
})(jQuery)