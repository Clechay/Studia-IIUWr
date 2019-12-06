
$(document).ready(function(){
	$('img').click(function(){
		$(this).toggleClass("selected")
	})
	$('#reset').click(function(){
		$("img.selected").removeClass('selected')
	})
	$('#log').click(function(){
		const logs = [];
		$("img.selected").each(function(){
			logs.push(this.id);
		})
		$("#logi").val(logs.join('\n'));
	})
})