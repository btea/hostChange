const fs = require('fs')  
const path = 'C:/Windows/System32/drivers/etc/hosts'  

let str = ''
fs.readFile(path, 'utf-8', function(err, data) {
    if (err) {
        throw Error(err)
    }
    str += data

    startWrite()
})

function startWrite() {
    let v = `
    # GitHub Start 
    192.30.253.112 Build software better, together 
    192.30.253.119 gist.github.com
    151.101.184.133 assets-cdn.github.com
    151.101.184.133 raw.githubusercontent.com
    151.101.184.133 gist.githubusercontent.com
    151.101.184.133 cloud.githubusercontent.com
    151.101.184.133 camo.githubusercontent.com
    151.101.184.133 avatars0.githubusercontent.com
    151.101.184.133 avatars1.githubusercontent.com
    151.101.184.133 avatars2.githubusercontent.com
    151.101.184.133 avatars3.githubusercontent.com
    151.101.184.133 Build software better, together
    151.101.184.133 avatars5.githubusercontent.com
    151.101.184.133 avatars6.githubusercontent.com
    151.101.184.133 avatars7.githubusercontent.com
    151.101.184.133 Build software better, together
    `
    str += v
    fs.writeFile(path, str, function(err) {
        if (err) {
            console.log('写入失败')
            throw Error(err)
        }
        console.log('写入成功')
    })
}
