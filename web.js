var express = require('express');

var app = express.createServer(express.logger());


app.get('/', function(request, response) {
var read = fs.readFileSync('index.html', 'utf8');
var buff = new Buffer('read');

  response.send(buff.toString('utf8',0,buff.length));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
