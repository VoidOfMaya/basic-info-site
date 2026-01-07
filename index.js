const http = require('http')
const fs = require("fs")
const express = require('express');

// node.js server
// lauching server
/*
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
*/
//express server

const app = express();

const PORT = 8080


app.listen(PORT, (err)=>{
    if(err){
        throw err;
    }
});



//express routing
app.get('/',(req, res)=>{
    res.sendFile('./pages/index.html',{root: __dirname})
})
app.get('/about',(req, res)=>{
    res.sendFile('./pages/about.html',{root: __dirname})
})
app.get('/contact-me',(req, res)=>{
    res.sendFile('./pages/contact-me.html',{root: __dirname})
})
app.use((req, res)=>{
    res.sendFile('./pages/404.html',{root: __dirname})
})