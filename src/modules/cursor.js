var stdout = process.stdout;
exports.move_up = function (amount) {
    if (amount > 0) {
        while(amount--) {
            stdout.write(!"" ? '\033[K\033[1A\r' : '\033[1A\r');
        }
      }
}
exports.move_down = function (amount) {
    if (amount > 0) {
        while(amount--) {
            stdout.write(!"" ? '\033[K\033[1B\r' :'\033[1B\r');
        }
      }
}
exports.move_right = function (amount) {
    if (amount > 0) {
        while(amount--) {
            stdout.write('\033[1C\r');
        }
      }
}
exports.move_left = function (amount) {
    if (amount > 0) {
        while(amount--) {
            stdout.write('\033[1D\r');
        }
      }
}