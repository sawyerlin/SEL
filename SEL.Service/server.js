var restify = require('restify');
var selUser = require('./selUser');

function respond(req, res) {
  res.send('hello ' + req.params.name);
}

function createNewUser(req, res) {

    selUser.register(req.params);

    res.send("You posted a first name of " + req.params.test);
}

var server = restify.createServer();
server.use(restify.CORS({origins: ['*']}));
server.use(restify.fullResponse());
server.use(restify.bodyParser());
server.get('/hello/:name', respond);
server.post('/user/register', createNewUser);

server.listen(8001, function() {
  console.log('%s listening at %s', server.name, server.url);
});