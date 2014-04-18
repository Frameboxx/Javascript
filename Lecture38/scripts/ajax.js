$(function(){

	var getData = $.ajax({
		url:'http://localhost:9000/serve/01',
	})

	var getMoreData = $.ajax({
		url:'http://localhost:9000/serve/02',
	})

	
	// getData.done(function(data){
	// 		$('.display').append('AJAX 1: ' + data + '<BR>');
	// })
	
	// getData.done(function(data){
	// 		console.log('This is the result: ' + data);
	// })

	// getData.fail(function(){
	// 	alert('Failed !');
	// })

	// getMoreData.done(function(data){
	// 	$('.display').append('AJAX 2: ' + data + '<BR>')
	// })	


	// Parallel Execution
	// $.when(getData, getMoreData).done(function(data, data1){
	// 	$('.display').append('AJAX1: ' + data[0] + '<br>');
	// 	$('.display').append('AJAX2: ' + data1[0]);
	// }).fail(function(){

	// })

	// Chained Execution
	getData.then(function(data){
		console.log('AJAX1: ' + data);
		getMoreData.done(function(data1){
			$('.display').append('AJAX1: ' + data + '<br>');
			$('.display').append('AJAX2: ' + data1);
		}).fail(function(){

		})
	}).fail(function(){

	})

})