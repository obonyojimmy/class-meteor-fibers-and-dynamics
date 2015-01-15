var Fibers = Npm.require('fibers');
var LATENCY = 5000;

function asyncIO(callback) {

  function runCallback() {
    callback(null, {title: 'A result!'});
  }

  setTimeout(runCallback, LATENCY);
}

console.log('Starting async IO');
var result = asyncIO(function (err, result) {
  console.log('AsyncIO complete: ', result);
});

// request 1


// request 2
