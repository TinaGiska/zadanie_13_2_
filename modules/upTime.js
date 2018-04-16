var os = require('os');

function getTime() {
    var uptime = os.uptime();
    console.log('Uptime: ~', (uptime / 60).toFixed(0), 'min' || 'Uptime: ~', (uptime / 3600).toFixed(0), 'h' );
}

exports.print = getTime;
