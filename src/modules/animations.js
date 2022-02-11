var color = require('./color.js');
var cursor = require('./cursor.js');
var tools = require('./tools.js');
exports.loading = async function (time, text) {
var txt = text || "";
var time = time || 1;
    for (time > 0; time--;) {
        console.log(color.colorize('cyan', "↻ " + txt));
        await tools.sleep(200);
        cursor.move_up(1)
        console.log(color.colorize('cyan', "⟳ " + txt));
        await tools.sleep(200);
        cursor.move_up(1)
        console.log(color.colorize('cyan', "⤸ " + txt));
        await tools.sleep(200);
        cursor.move_up(1)
        console.log(color.colorize('cyan', "⤾ " + txt));
        await tools.sleep(200);
        cursor.move_up(1)
        console.log(color.colorize('cyan', "↻ " + txt));
        cursor.move_up(1)
    }
    await time < 1;
}