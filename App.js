var net = require('net'),
    once = require('once');

module.exports = function (cb) {
    var socket = net.connect({
        port: 80,
        host: 'nodejs.org'
      })
}
