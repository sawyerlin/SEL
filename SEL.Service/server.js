var restify = require('restify');
var selUser = require('./selUser');

function respond(req, res, next) {
  res.send('hello ' + req.params.name);
}

function createNewUser(req, res, next) {
    var user = {};
    user.username = req.params.username;
    user.password = req.params.password;
    user.avatar = req.params.avatar;

    res.setHeader('Access-Control-Allow-Origin','*');

    selUser.register(user);

    return next();
}

var server = restify.createServer();

server.get('/hello/:name', respond);
server.post({path:'/user/register'}, createNewUser);

server.listen(8001, function() {
  console.log('%s listening at %s', server.name, server.url);
});