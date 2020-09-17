const { run } = require('node-cmd')

var exec = require('child_process').exec
var cmd = {
    get: getString,
    runCommand: runCommand
}

function getString(command, callback) {
    return exec(
        command,
        {
            encoding: 'utf-8'
        },
        (
            function(){
                return function(err,data,stderr){
                    if(!callback)
                        return;

                    callback(err, data, stderr);
                }
            }
        )(callback)
    );
}

function runCommand(command) {
    return exec(command)
}

module.exports = cmd