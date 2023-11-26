const http = require('http');

const routes = require('./routes.js')// or you can you use'./routes' no need to use .js

//method 1
const server = http.createServer(routes)
// method 2, 3, 4
// const server = http.createServer(routes.handler)
// console.log(routes.someText)

server.listen(5000)