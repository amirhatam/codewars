// One solution
/**
 * @param {String} str - inital string
 * @param {Number} len - line length
 */
var justify = function (str, len) {
    var words = str.split(' ');
    var lines = [];

    while (words.length > 0) {
        var line = [];
        var length = -1;
        while (words.length > 0 && length + words[0].length < len) {
            var word = words.shift();
            line.push(word);
            length += word.length + 1;
        }
        var spaces = line.length - 1;

        var each = 1;
        var head = 0;
        if (len - length > 0 && words.length > 0) {
            each += ~~((len - length) / spaces);
            head = (len - length) % spaces;
        }
        lines.push(line
            .map(w => w + (head-- > 0 ? ' ' : ''))
            .join(' '.repeat(each)));
    }

    return lines.join('\n');
};


//BEST practices
/**
 * @param {String} str - inital string
 * @param {Number} len - line length
 */
function justify(str, len) {
    var words = str.split(' ');
    var lines = [];
    var lastLine = words.reduce(function (line, word) {
        if (line) {
            if (line.length + word.length + 1 <= len)
                return line + ' ' + word;
            lines.push(line);
        }
        return word;
    });
    lines = lines.map(function (line) {
        if (line.indexOf(' ') >= 0)
            for (var lineLen = line.length; lineLen < len;)
                line = line.replace(/ +/g, function (spaces) {
                    return spaces + (lineLen++ < len ? ' ' : '');
                });
        return line;
    });
    lastLine && lines.push(lastLine);
    return lines.join('\n');
}