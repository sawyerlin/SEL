exports.parse = function(input) {
    if (input == null || input == '') return;

    var str = removeSlashAtEnd(input);

    var index = str.indexOf('api');

    if (index == -1) return;

    var classification = str.substr
 };

function removeSlashAtEnd(input) {
    if (input.substr(input.length - 1) == '/')
        return input.substr(0, input.length - 1);
    return input;
}