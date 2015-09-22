/**
 * Closures are function that refer to a variable.
 */

// Normal function
function sayMyName() {
	
	var myName = 'dilusha with normal function';
	
	// private method
	function sayName() {
		console.log('My name is: ' + myName);
	}	
	
	sayName();
};


// Closure
var sayMyNameClosure = function() {
	
	var myName = 'dilusha with closure';
	
	function sayName() {
		console.log('My name is: ' + myName);
	}
	
	return sayName;
};

var sayMyNameClosure = sayMyNameClosure();


// Closure with exposing multiple methods
var counter = (function() {
	
	var currentValue = 0;
	
	function getClosureName() {
		console.log("Counter - Closure with exposing multiple methods");
	};
	
	return {
		
		incrementByOne: function() {
			currentValue = currentValue + 1;
		},
		
		decrementByOne: function() {
			currentValue = currentValue - 1;
		},
		
		printCurrnetValue: function() {
			console.log(currentValue);			
		},
		
		printClosureName: function() {
			getClosureName();
		}
	};
	
})();


function tryMultipleReturns() {
	counter.incrementByOne();
	counter.incrementByOne();
	counter.decrementByOne();
	counter.printCurrnetValue();
	counter.printClosureName();
};


// General object
var car = new Object();
car.make = 'toyota';
car.model = 'camry';
car.year = '2011';

function viewCarDetails() {
	console.log('Make: ' + car.make + ' Model: ' + car.model + ' Year: ' + car.year);
}

// Object with private and public methods
var myCar = function() {
	
	var make = 'land rover';
	var model = 'evoque';
	var year = '2014';
	
	// private methods
	function showDetails(){
		console.log('Make: ' + make + ' Model: ' + model + ' Year: ' + year);
	}
	
	// public methodss
	myCar.prototype.displayDetails = function() {
		showDetails();
	};
	
	myCar.prototype.getMake = function() {
		console.log('Make: ' + make);
	};
	
	myCar.prototype.seMake = function(newMake) {
		make = newMake;
	};
	
};

function displayCarDetails() {
	var myNewCar = new myCar();
	myNewCar.displayDetails();
	myNewCar.getMake();
	myNewCar.seMake("bmw");
	myNewCar.displayDetails();
	
};
