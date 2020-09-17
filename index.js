const cmd = require('./cmd')
const node_cmd = require('node-cmd')

function operator(command) {
    cmd.get(command, function(err, data) {
        if (err) {
            console.log(err)
            return 
        }
        console.log(data)
    })
}
// node_cmd.get('ipconfig', function(err, data) {
//     if (err) {
//         console.log(err)
//         return 
//     }
//     console.log(data)
// })
operator('ipconfig')