exports.colorize = function (color,text) {
    if (color === '') {
        return '\x1b[0m' + text + '\x1b[0m';
    }
    else if (color === 'red') {
        return '\x1b[31m' + text + '\x1b[0m';
    }
    else if (color === 'green') {
        return '\x1b[32m' + text + '\x1b[0m';
    }
    else if (color === 'yellow') {
        return '\x1b[33m' + text + '\x1b[0m';
    }
    else if (color === 'blue') {
        return '\x1b[34m' + text + '\x1b[0m';
    }
    else if (color === 'magenta') {
        return '\x1b[35m' + text + '\x1b[0m';
    }
    else if (color === 'cyan') {
        return '\x1b[85m' + text + '\x1b[0m';
    }
    else if (color === 'gray') {
        return '\x1b[90m' + text + '\x1b[0m';
    }
    else if (color === 'white') {
        return '\x1b[38m' + text + '\x1b[0m';
    }
    else if (color === 'black') {
        return '\x1b[30m' + text + '\x1b[0m';
    }
    else {
        return text;
    }
}