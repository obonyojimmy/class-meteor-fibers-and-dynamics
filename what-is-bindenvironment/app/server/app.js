Fiber = Npm.require('fibers');

Name = new Meteor.EnvironmentVariable;

function handleRequest () {
  console.log(Name.get() + ': handling request');

  setTimeout(Meteor.bindEnvironment(function() {
    debugger;
    var fiber = Fiber.current;
    console.log(Name.get() + ': finished request');
  }), 2000);
}

Fiber(function () {
  Name.withValue('Chris', handleRequest);
}).run();

Fiber(function () {
  Name.withValue('Anne', handleRequest);
}).run();

