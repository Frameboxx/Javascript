$(function(){
	$('.header').load('../partials/header.htm');
	$('.content').load('../partials/content.htm');
	$('.footer').load('../partials/footer.htm');

	$(document).on('click', '.nav ul li', function(e){
		e.preventDefault();
		var page = $(this).data('page');
		$('.content').load('../partials/' + page);
		// .load is essentially an AJAX with a GET request
	})
})