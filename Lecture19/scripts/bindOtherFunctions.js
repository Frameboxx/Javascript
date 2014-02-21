function Heads(name, department){
	this.name = name;
	this.department = department;
}

Heads.prototype.isHOD = function(){
	console.log(this.name + " heads " + this.department);
}

function Employee(name){
	this.name = name;
	this.department = "Sales";
}

var Chris = new Heads("Chris", "Marketing");

Chris.isHOD();

var John = new Employee("John");

var amHOD = Chris.isHOD.bind(John);

amHOD();