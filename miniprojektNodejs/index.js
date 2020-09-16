const http = require('http');
var url = require('url');
var fs = require('fs');

const server = http.createServer((req, res) => {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    if(q.pathname=="/"){
        //if nothing just load index.html
        fs.readFile(filename+"index.html", function(err, data) {
            if (err) {
              res.writeHead(404, {'Content-Type': 'text/html'});
              return res.end("404 Not Found");
            } 
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
          });
    } else 
    fs.readFile(filename, function(err, data) {
        if (err) {
          res.writeHead(404, {'Content-Type': 'text/html'});
          return res.end("404 Not Found");
        } 
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
      });
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
/*var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(process.env.PORT || 8080);
*/
//type http://localhost:8080/index.html