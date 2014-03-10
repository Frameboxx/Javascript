window.onload = function(){
	var filepath = "../userlist.csv";
	var dataset = [];
	var findset = [];
	var recordsPerPage = 20;

	var disp = document.getElementById("dataTable");
	var nms = document.getElementById("names");
	// Event listner for the search box
	var tmr;
	nms.addEventListener("keyup", function(e){
		if(tmr){
			clearTimeout(tmr);
		}
		tmr = setTimeout(function(){
			// find the records by the keyword
			find(e.target.value);
		}, 600);

	})

	var pgn = document.querySelector(".pagination");
	// Event Listener for Pagination buttons
	pgn.addEventListener("click", function(e){
		var p = e.target.innerHTML;
		display(findset, p);	
	})

	// Load the data from the file
	var xhr = new XMLHttpRequest();
	xhr.open('GET',filepath,true);
	xhr.addEventListener('load', function(){
		var linebyline = xhr.responseText.split(/\r\n|\n/g);
		process(linebyline);
	})
	xhr.send();

	function process(arr){
		// separate every element by , and put it inside a json array
		for(var i in arr){
			if(i!=0){
				var temp = arr[i].split(",");
				dataset.push({
					firstname:temp[0],
					lastname:temp[1],
					lastlogin:temp[2],
					firstlogin:temp[3],
					quota:temp[4]
				})
			}
		}

		findset = dataset;
		display(findset);
	}

	function find(keyword){
		var findKeyword = new RegExp(keyword.replace(/\s/,"") + '.*', "i");
		findset = [];
		dataset.forEach(function(item){
			var f = findKeyword.test(item.firstname) || findKeyword.test(item.lastname) || findKeyword.test(item.firstname + item.lastname);
			if(f){
				findset.push(item);
			}
		});
		
		display(findset);
	}

	function display(data, pg){
		// Empty the table
		disp.innerHTML = "";
		pg = pg || 0;
		// Calculate the number of pages to show
		var pages = Math.ceil(data.length/recordsPerPage);
		pgn.innerHTML = '';
		// Create pagination buttons
		for(var p=0;p<pages;p++){
			pgn.innerHTML += '<li>' + p + '</li>';
		}
		// Loop through the data and display it
		for(var i=pg*recordsPerPage; i<(pg*recordsPerPage)+recordsPerPage; i++) {
			if(i<data.length){
				var str = '<tr>';
					str += '<td>' + data[i].firstname + '</td>';
					str += '<td>' + data[i].lastname + '</td>';
					str += '<td>' + (data[i].lastlogin!=0?(data[i].lastlogin).replace(/(\d{4})(\d{2})(\d{2})/, "$3-$2-$1"):"N/A") + '</td>';
					str += '<td>' + (data[i].firstlogin!=0?(data[i].firstlogin).replace(/(\d{4})(\d{2})(\d{2})/, "$3-$2-$1"):"N/A") + '</td>';
					str += '<td>' + data[i].quota + '% </td>';
					str += '</tr>';
					disp.innerHTML += str;
			}
		}
	}
}