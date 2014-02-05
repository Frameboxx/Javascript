window.onload = function(evt){
	var listEl = document.getElementById('todoList');
	var taskInput = document.getElementById('taskInput');

	// The todos array will hold our todo tasks
	var todos = new Array();	

	// This function renders the list by first clearing out
	// the UL and then looping over the array to insert
	// list items
	function renderList(){
		// Clear out the UL
		listEl.innerHTML = '';
		// loop over the todos array and append items to the UL
		if(localStorage.tasks == undefined){
			localStorage.tasks = JSON.stringify([]);
			todos = JSON.parse(localStorage.tasks);
		} else {
			todos = JSON.parse(localStorage.tasks);
		}
		
		for(var i in todos){
			listEl.innerHTML += '<li><h6>' + todos[i] + '</h6><a href="#" class="remTask" data-taskid="' + i + '">X</a></li>'
		}
	}

	// This function adds new items to the todos array and accepts the task string as a parameter
	function addTask(task){
		todos.push(task);
		localStorage["tasks"] = JSON.stringify(todos);
		// Once you have inserted a new task into the todos array, re-render the list
		renderList();
	}


	// This function removes an item from the todos array & accepts the index number of the item
	function remTask(id){
		todos.splice(id,1);
		localStorage["tasks"] = JSON.stringify(todos);
		renderList();
	}

	// When the app loads for the first time, we need to render the list, so call this
	// function once.
	renderList();
	
	// Event Listeners
	taskInput.addEventListener('keydown', function(evt){
		// Check to see whether the key that we have pressed is the 'enter' key and
		// only then execute the rest of the code.
		if(evt.keyCode===13){
			addTask(this.value);
			// Clear out the input field
			this.value = '';
		}
	});

	// Attach an event listener to the listBox div so all elements under it can be observed
	// for 'click' events. 
	document.getElementById('listBox').addEventListener('click', function(evt){
		// When the user clicks anywhere inside #listBox, 
		// match the className to see if it is the 'remTask' button.
		// If it is, then get the value of the 'data-taskid' attribute for that
		// button and pass it to the remTask() function so the item can be removed.
		if(evt.target.className.match('remTask')){
			var id = evt.target.getAttribute('data-taskid');
			remTask(id);
		}
	})

}