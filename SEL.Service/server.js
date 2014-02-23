var http = require('http');
var url = require('url');
var selUser = require('./selUser');

var port = process.env.port || 1337;
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    var pathname = url.parse(req.url).pathname;

    switch (pathname) {
        case '/user/login':
            selUser.login('admin', '123456', function(result) {
                res.end(result.toString());    
            });
            
        break;
        case '/user/getUser':
            selUser.getUser(1, function(result) {
                 res.end(JSON.stringify(result));
            });
        break;
        default:
        break;
    }
}).listen(port);