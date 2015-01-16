Fiber = Npm.require('fibers');

Name = new Meteor.EnvironmentVariable;

function doAsyncIO (callback) {
  setTimeout(function () {
    callback(null, {title: 'An async result!'});
  }, 2000);
}

var doSyncIO = Meteor.wrapAsync(doAsyncIO);

function handleRequest () {
  var name = Name.get();
  var fiber = Fiber.current;
  debugger;
  console.log(name + ': handling request');
  var result = doSyncIO();
  console.log(name + ': ', result);
}

Fiber(function () {
  Name.withValue('Chris', handleRequest);
}).run();

Fiber(function () {
  Name.withValue('Anne', handleRequest);
}).run();
