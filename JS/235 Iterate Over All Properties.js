/*
Iterate Over All Properties
You have now seen two kinds of properties: own properties and prototype properties. Own properties are defined directly on the object instance itself. And prototype properties are defined on the prototype.

function Bird(name) {
  this.name = name;  //own property
}

Bird.prototype.numLegs = 2; // prototype property

let duck = new Bird("Donald");
Here is how you add duck's own properties to the array ownProps and prototype properties to the array prototypeProps:

let ownProps = [];
let prototypeProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

console.log(ownProps);
console.log(prototypeProps);
console.log(ownProps) would display ["name"] in the console, and console.log(prototypeProps) would display ["numLegs"].

Add all of the own properties of beagle to the array ownProps. Add all of the prototype properties of Dog to the array prototypeProps.

Tests
Waiting:The ownProps array should only contain name.
Waiting:The prototypeProps array should only contain numLegs.
Waiting:You should solve this challenge without using the built in method Object.keys().
*/