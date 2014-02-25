var mysql = require('mysql');

var connection = mysql.createConnection({
    host : '192.168.1.40',
    user : 'seladmin',
    password : 'seladmin',
    database : 'SEL'
});

connection.connect();

exports.login = function(user, password, result) {

    var isLogged = false;

    connection.query('SELECT COUNT(*) AS Count FROM User WHERE UserName = \'' + user + '\' AND ' + 'UserPassword = \'' + password + '\'', function(err, rows) {
        if (err) throw err;

        isLogged = rows[0].Count == 1;

        result(isLogged);
    });
};

exports.getUser = function(id, result) {
    connection.query('SELECT idUser, UserName, UserAvatar FROM User WHERE idUser = ?', id, function(err, rows) {
        if (err) throw err;

        result(rows);
    });
};

exports.register = function(user) {
    console.log(user);
}