window.onload = function(){
	var listEl = document.getElementById('todoList');
	
	function addTask(task){
		listEl.innerHTML += "<li><h6>" + task + "</h6></li>";
	}

	addTask("This is a task");
	addTask("This is another task");
}