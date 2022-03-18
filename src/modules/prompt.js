
exports.wait = function () {
// wait for user to press a key
    return new Promise((resolve) => {
        process.stdin.once('data', function (key) {
            resolve(key)
            process.stdin.pause()
        })
    })
}