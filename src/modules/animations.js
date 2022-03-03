var color = require('./color.js');
var cursor = require('./cursor.js');
var tools = require('./tools.js');
exports.loading_while = function (condition, text) {
e();
async function e(){
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
}
exports.loading_time = function (time, text) {
    e();
    async function e(){
    var txt = text || "";
    var i = 0
    cursor.hide();
        while (i < time) {
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
            i++
        }
        console.log(color.colorize('cyan', "◯  " + txt));
        cursor.show();
    }
    }