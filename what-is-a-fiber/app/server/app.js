var Fiber = Npm.require('fibers');

function three() {
  console.log('three');
}

function two() {
  console.log('two');
  debugger;
  var returnValue = Fiber.yield();
  debugger;
  three();
}

function one() {
  console.log('one');
  two();
}

debugger;
var myFiber = Fiber(one);
myFiber.run();
debugger;
console.log("Okay I can run now.");
myFiber.run("pass in a parameter");
