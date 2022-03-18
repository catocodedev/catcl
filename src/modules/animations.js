var color = require('./color.js');
var cursor = require('./cursor.js');
var tools = require('./tools.js');
exports.loading_while = function (condition, text) {
return new Promise((resolve) => {
var txt = text || "";
cursor.hide();
    while (condition) {
        console.log(color.colorize('cyan', "↻ " + txt));
        cursor.move_up(1)
        setTimeout(function(){}, 100);
        console.log(color.colorize('cyan', "⟳ " + txt));
        cursor.move_up(1)
        setTimeout(function(){}, 100);
        console.log(color.colorize('cyan', "⤸ " + txt));
        cursor.move_up(1)
        setTimeout(function(){}, 100);
        console.log(color.colorize('cyan', "⤾ " + txt));
        cursor.move_up(1)
        setTimeout(function(){}, 100);
        console.log(color.colorize('cyan', "↻ " + txt));
        cursor.move_up(1)
    }
    console.log(color.colorize('cyan', "◯  " + txt));
    cursor.show();
    resolve()
})
}
exports.loading_time = function (time, text) {
    return new Promise((resolve) => {
    var txt = text || "";
    var i = 0
    cursor.hide();
        while (i < time) {
                console.log(color.colorize('blue', "↻ " + txt));
            cursor.move_up(1)
                console.log(color.colorize('blue', "⟳ " + txt));
                cursor.move_up(1)   
                console.log(color.colorize('blue', "⤸ " + txt));
            cursor.move_up(1)
                console.log(color.colorize('blue', "⤾ " + txt));
            cursor.move_up(1)
            console.log(color.colorize('blue', "↻ " + txt));
            cursor.move_up(1)
            i++
        }
        console.log(color.colorize('blue', "◯  " + txt));
        cursor.show();
        resolve()
    })
    }