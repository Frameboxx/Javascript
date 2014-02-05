window.onload = function(){
	var loadBtn = document.querySelector('#load');
	var display = document.querySelector('#display');
	var url = "http://localhost:9000/servedata";

	loadBtn.addEventListener("click", loadData);

	var jsData = null;

	function loadData(){
		var xhr = new XMLHttpRequest();
		xhr.open('GET', url, true);
		xhr.onload = function(){
			jsData = JSON.parse(xhr.responseText);
			showData();
		};
		xhr.send();
	}

	function showData(){
		display.innerHTML = '';
		for(var i in jsData){
			var str = '<tr>';
				str += '<td>' + jsData[i].name + '</td>';
				str += '<td>' + jsData[i].email + '</td>';
				str += '<td>' + jsData[i].age + '</td>';
				str += '</tr>';
			display.innerHTML += str;
		}
	}


}