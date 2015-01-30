Fiber = Npm.require('fibers');

Name = new Meteor.EnvironmentVariable;

function doAsyncIO(callback) {
  setTimeout(function () {
    callback(null, {title: 'some title'});
  }, 2000);
}

var doSyncIO = Meteor.wrapAsync(doAsyncIO);

function handleRequest () {
  console.log(Name.get() + ': handling request');
  var result = doSyncIO();
  console.log(Name.get() + ': ' + JSON.stringify(result));
}

Fiber(function () {
  Name.withValue('Chris', handleRequest);
}).run();

Fiber(function () {
  Name.withValue('Anne', handleRequest);
}).run();
