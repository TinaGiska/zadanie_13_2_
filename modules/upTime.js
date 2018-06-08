var os = require('os');


function getTime() {
    var uptime = os.uptime();
    var houres = (uptime / 3600).toFixed(0);
    var minutes = ((uptime - houres*3600)/60).toFixed(0)
    var seconds = (uptime - houres*3600)- minutes*60
    console.log(uptime, '~', houres, 'h', minutes, 'm', seconds, 's');
}

exports.print = getTime;
