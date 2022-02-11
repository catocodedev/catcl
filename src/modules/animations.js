var color = require('./color.js');
var cursor = require('./cursor.js');
var tools = require('./tools.js');
exports.loading = async function (time, text) {
var txt = text || "";
cursor.hide();
    for (time > 0; time--;) {
        console.log(color.colorize('cyan', "↻ " + txt));
        cursor.move_up(1)
        await tools.sleep(10);
        console.log(color.colorize('cyan', "⟳ " + txt));
        cursor.move_up(1)
        await tools.sleep(10);
        console.log(color.colorize('cyan', "⤸ " + txt));
        cursor.move_up(1)
        await tools.sleep(10);
        console.log(color.colorize('cyan', "⤾ " + txt));
        cursor.move_up(1)
        await tools.sleep(10);
        console.log(color.colorize('cyan', "↻ " + txt));
        cursor.move_up(1)
        await tools.sleep(10);
    }
    console.log(color.colorize('cyan', "◯  " + txt));
    cursor.show();
    await time < 1;
}