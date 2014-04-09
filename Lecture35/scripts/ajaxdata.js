$(function(){

	$.ajax({
		url:'http://localhost:9000/servedata',
		success:function(data){
			// $.each(data, function(i){
			// 	var trow = "<tr>";
			// 	trow += "<td>" + data[i].name + "</td>";
			// 	trow += "<td>" + data[i].email + "</td>";
			// 	trow += "<td>" + data[i].age + "</td>";
			// 	trow += "</tr>";

			// 	$("#ajaxTable tbody").append(trow);
			// })
	
			$("#ajaxTable").dynatable({
				dataset: {
					records:data,
					perPageDefault:5 
				}
			})


		},
		error:function(){
			// handle the error
		}
	})


})