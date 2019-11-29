
$(document).ready(function(){
	$('img').click(function(){
		$(this).toggleClass("selected")
	})
	$('#reset').click(function(){
		$("img.selected").removeClass('selected')
	})
	$('#log').click(function(){
		$("img.selected").each(function(){
			console.log(this.id);
		})
	})
})