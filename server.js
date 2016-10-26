var connect = require('connect');
var serveStatic = require('serve-static');

var app = connect();

app.use(serveStatic('./'));
app.listen(5005);

console.log('Listening on port 5005...');