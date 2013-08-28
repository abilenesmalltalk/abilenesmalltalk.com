var connect = require('connect');
connect.createServer(
  connect.static(__dirname)
).listen(5005);
console.log('Listening on port 5005...');
