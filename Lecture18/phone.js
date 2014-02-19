function BasePhone(phNum){
	this.number = phNum;
}

// Define the Base Phone's Prototype. This defines the various things that a 'Phone' can do.
BasePhone.prototype = {
	info: function(){
		console.log("This is a phone (" + this.number + "):" + this.brand + " " + this.model);
	},
	dialNumber: function(n){
		setTimeout(function(){
			console.log('Dialing Number: ' + n);
		}, 1000);
	},
	features: function(){
		console.log('Camera: ' + this.camera);
		console.log('GPS: ' + this.gps);
		console.log('FM Radio: ' + this.fmradio);
		console.log('Accelerometer: ' + this.accelerometer);
	},
	takePicture:function(){
		console.log('Taking a picture');
	}
}

// Create a Smartphone
function Smartphone(brand, model, number){
	this.camera = 'Yes';
	this.gps = 'Yes';
	this.accelerometer = 'Yes';
	this.fmradio = 'No';
	this.brand = brand;
	this.model = model;
	BasePhone.call(this, number);
}

// Inherit the functionalities of a Phone. This enables the 'Smartphone' to behave like a phone with functionality.
Smartphone.prototype = new BasePhone();
// Since we inherited the BasePhone, the constructor of the Smartphone points to that of the Basephone. The following statement corrects that issue.
Smartphone.prototype.constructor = Smartphone;

// Create a Featurephone in the same manner as we created the Smartphone.
function Featurephone(brand, model, number){
	this.camera = 'Yes';
	this.gps = 'No';
	this.accelerometer = 'No';
	this.fmradio = 'Yes';
	this.brand = brand;
	this.model = model;
	BasePhone.call(this, number);
}

Featurephone.prototype = new BasePhone();
Featurephone.prototype.constructor = Featurephone;



var myPhone = new Smartphone("Apple", "iPhone 5S", "9814102943");

// myPhone is an instance of the Smartphone object which inherits methods/properties from BasePhone and hence the info(), features(), dialNumber() functions are available and it runs.
myPhone.info();
myPhone.features();
myPhone.takePicture();

var simplePhone = new Featurephone("Nokia", "5000", "8192828129");

// simplePhone is an instance of the Featurephone type and hence it too has all functions of the basePhone available.

