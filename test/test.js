var awsMongodump = require('..');
var datestr = +new Date();
var conf = require('./conf');
awsMongodump.setLogLevel(1);
awsMongodump.dump(conf.uri, "test-" + datestr, { partSize: 2*10485760 }, function (err, res) {
  console.log(arguments);
});
