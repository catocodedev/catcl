var color = require('./modules/color.js');
var prompt = require('./modules/prompt.js');
var aminmation = require('./modules/animations.js');
var cursor = require('./modules/cursor.js');
var tools = require('./modules/tools.js');
exports.log = function (text) {
    console.log(color.colorize('gray', " » " + text));
  };
exports.error = function (text) {
    console.log(color.colorize('red', "ⓧ  " + text));
  }
exports.success = function (text) {
    console.log(color.colorize('green', "✔  " + text));
}
exports.warn = function (text) {
    console.log(color.colorize('yellow', "⚠  " + text));
}
exports.info = function (text) {
    console.log(color.colorize('blue', " ℹ " + text));
}
exports.sleep = async function (ms) {
  await tools.sleep(ms);
}
exports.loading = async function (waiting,text) {
  await aminmation.loading(waiting,text);
}
exports.cursor_up = function (lines) {
    cursor.move_up(lines);
}
exports.cursor_down = function (lines) {
    cursor.move_down(lines);
}
exports.cursor_left = function (lines) {
    cursor.move_left(lines);
}
exports.cursor_right = function (lines) {
    cursor.move_right(lines);
}
// ⇨ 