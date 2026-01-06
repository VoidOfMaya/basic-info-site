import http from 'http'
import fs from "fs"

// lauching server
const server = http.createServer((req, res)=>{
    //declaring res content type
    res.setHeader('Content-Type', 'text/html');

    //pages path
    let path ='./pages/'

    //router
    switch (req.url) {
        case '/':
            path += 'index.html'
            res.statusCode = 200
            break;
        
        case '/about':
            path += 'about.html'
            res.statusCode = 200
            break;

        case '/contact-me':
            path += 'contact-me.html'
            res.statusCode = 200
            break;
        // 404 handelling
        default:
            path+= '404.html'
            res.statusCode= 404
            break;
    }
    //reading incomming data and pushing out a response
    fs.readFile(path, (err, data)=>{
        err ? console.log(err) : res.end(data);
    })
})
// server listining on localhost, port 8080
server.listen(8080, 'localhost',()=>{
    console.log('server running...');
});