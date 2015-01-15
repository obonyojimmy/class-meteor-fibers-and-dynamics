var Fiber = Npm.require('fibers');

var doAsyncIO = function (callback) {
  setTimeout(function () {
    callback(null, {title: 'Finally a result!'});
  }, 2000);
};

var doSyncIO = Meteor._wrapAsync(doAsyncIO);

var handleRequest = function (num) {
  console.log('Handling the request: ' + num);
  var doc = doSyncIO();
  console.log(num + ': ', doc);
};

Fiber(function () { handleRequest(1); }).run();
Fiber(function () { handleRequest(2); }).run();
Fiber(function () { handleRequest(3); }).run();
Fiber(function () { handleRequest(4); }).run();
