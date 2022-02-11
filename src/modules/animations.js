var color = require('./color.js');
var cursor = require('./cursor.js');
var tools = require('./tools.js');
exports.loading = async function (condition, text) {
var txt = text || "";
cursor.hide();
    while (condition) {
        console.log(color.colorize('cyan', "↻ " + txt));
        cursor.move_up(1)
        await tools.sleep(100);
        console.log(color.colorize('cyan', "⟳ " + txt));
        cursor.move_up(1)
        await tools.sleep(100);
        console.log(color.colorize('cyan', "⤸ " + txt));
        cursor.move_up(1)
        await tools.sleep(100);
        console.log(color.colorize('cyan', "⤾ " + txt));
        cursor.move_up(1)
        await tools.sleep(100);
        console.log(color.colorize('cyan', "↻ " + txt));
        cursor.move_up(1)
    }
    console.log(color.colorize('cyan', "◯  " + txt));
    cursor.show();
}