const fs = require('fs')
const path = require('path')
const http = require('http')

const file = path.join(__dirname, 'index.html')
let change = false;
fs.watch(file, (event, name) => {
    change = true
})

http.createServer(function (request, response) {
    let url = request.url
    console.log(url);
    if (url === '/reload') {
        response.writeHead(200, {
            'Content-Type': 'text/event-stream',
            'Connection': 'keep-alive',
            'Cache-Control': 'no-cache'
        })
        if (change) {
            change = false
            response.end('data: reload\n\n')
        } else {
            response.end()
        }
    }
}).listen(2233)
