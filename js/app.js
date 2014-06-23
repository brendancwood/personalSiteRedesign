$(document).ready(function(){
	$('.content').detach();
	clickSquare();
});

var clickSquare = function(){
	$('.square').on('click', function(){
		var myContainer = $('.myContainer');
		var page = $(this).data("type");
		$(this).closest('.container').fadeOut("slow", function(){
			// $('.myContainer').fadeIn();
			$('.nav-container').append(page);
		});
	});
}

