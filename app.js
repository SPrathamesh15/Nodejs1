const http = require('http')
const server = http.createServer((req, res) => {
    console.log('Hi, My name is Prathamesh')
    const url = req.url
    if (url === '/home'){
        res.write('<html>')
        res.write('<head><title>Home Page</title></head>')
        res.write('<body><h1>Welcome home</h1></body>')
        res.write('</html>')
        return res.end()
    } else if(url === '/about'){
        res.write('<html>')
        res.write('<head><title>About Page</title></head>')
        res.write('<body><h1>Welcome to my About Page</h1></body>')
        res.write('</html>')
        return res.end()
    } else if (url === '/node'){
        res.write('<html>')
        res.write('<head><title>Node Page</title></head>')
        res.write('<body><h1>Welcome to my Node Js Project</h1></body>')
        res.write('</html>')
        return res.end()
    }
    // process.exit();
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>My First Page</title></head>')
    res.write('<body><h1>Hello from my nodeJs Server!</h1></body>')
    res.write('</html>')
    res.end()
})
server.listen(5000)