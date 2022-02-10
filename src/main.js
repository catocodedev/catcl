var color = require('./modules/color.js');
var prompt = require('./modules/prompt.js');
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
exports.wait = function () {
}
// ⇨ 