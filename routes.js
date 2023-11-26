const fs = require('fs');
const requestHandler = (req, res) => {
    console.log('Hi, My name is Prathamesh')
    const url = req.url;
    const method = req.method;
    if (url === '/'){
        const messageContent = fs.readFileSync('message.txt');
        res.write('<html>')
        res.write('<head><title>Enter Message</title></head>')
        res.write(`<body><h1>${messageContent}</h1><form action="/message" method="POST"><input type="text" name="message"><button type="Submit">Send</button></input></form></body>`)
        res.write('</html>')
        return res.end()
    }else if (url === '/home'){
        res.write('<html>')
        res.write('<head><title>Home Page</title></head>')
        res.write('<body><h1>Welcome home</h1></body>')
        res.write('</html>')
        return res.end()
    } else if (url === '/message' && method === 'POST'){
        const body = [];
        //adding eventlistener to access data
        req.on('data', (chunk)=>{
            console.log(chunk);
            body.push(chunk);
        });
        // adding another eventlistener to end the event to get the data
        req.on('end', () => {
            const parsedbody = Buffer.concat(body).toString();
            const message = parsedbody;
            const newMessage = parsedbody.split('=')[1]
            console.log(message)
            console.log(newMessage)
            fs.writeFileSync('message.txt', newMessage)
        })
        res.statusCode = 302;
        res.setHeader('Location', '/')
        return res.end()
    }else if(url === '/about'){
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
}
// methods to export this file 
//method 1
module.exports = requestHandler;
//method 2 Note: method 2, 3, 4 all are same 
// module.exports = {
//     handler: requestHandler,
//     someText: 'some written text'
// }
//method 3
// module.exports.handler = requestHandler;
// module.exports.someText = 'Some writeen text';
//method 4
// exports.handler = requestHandler;
// exports.someText = 'Some written Text'