$(function(){

	

	function worker1(){
		var somework = $.Deferred();
		setTimeout(function(){
			var randomNum = Math.random() * 2000;
			somework.resolve(randomNum);
		},2000)
		return somework.promise();
	}

	function worker2(){
		var somework = $.Deferred();
		setTimeout(function(){
			var randomNum = Math.random() * 2000;
			somework.resolve(randomNum);
		},2000)
		return somework.promise();
	}

	

	worker1().then(function(a){
		worker2().done(function(b){
			// Can see both a & b variables
			$('.display').html(a + '|' + b);
		})
	})


})