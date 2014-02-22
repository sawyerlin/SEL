var mysql = require('mysql');

var connection = mysql.createConnection({
    host: '192.168.1.40',
    database: 'SEL',
    user:'seladmin',
    password:'seladmin'
});

connection.connect();

exports.getUser = function(userId) {
    connection.query('SELECT * FROM User WHERE idUser = ' + userId);
};