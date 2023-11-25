const http = require('http')
const server = http.createServer((req, res) => {
    console.log('Hi, My name is Prathamesh')
})
server.listen(4000)