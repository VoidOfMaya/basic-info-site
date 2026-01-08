// this is not part of the first backend node project
//rather an extension of following lessons

//import dependancies
const express = require ('express');
const authRouter = require ('./routes/authorRouter');
const bookRouter = require ('./routes/booksRouter');
const indexRouter = require ('./routes/indexRouter');
const path = require('node:path');
//create express server
const app = express();

//=====> EJS lesson <======
//setting up views + enable ejs

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//setting up static assets in ane xpress env
const assetsPath = path.join(__dirname, 'public');
app.use(express.static(assetsPath));

//variables
const links = [
  { href: "/", text: "Home" },
  { href: "about", text: "About" },
];

const users = ["Rose", "Cake", "Biff"];



app.get('/',(req, res)=>{
    res.render('index',{links: links, users: users})
})
app.get('/about',(req, res)=>{
    res.render('about',{links: links, name: 'david'})
})
/*
//set up routing middleware

app.use('/authors', authRouter);
app.use('/books', bookRouter);
app.use('/', indexRouter);

/* testing out how cpmmenting the next() method on the first middle ware 
   effects  the request cycle

function middleware1(req, res, next) {
  console.log("Middleware 1");
  next();  //Pass control to the next middleware
};


function middleware2(req, res, next) {
  console.log("Middleware 2");
  res.send("Response from Middleware 2");
  // request-response cycle ends here
};

function middleware3(req, res, next) {
  console.log("Middleware 3");
  res.send("Response from Middleware 3");
};

app.use(middleware1);
app.use(middleware2);
app.use(middleware3);
*/

//seting up error handeling middleware
//  note: for express torecognize this as error handler middleware
//        ALL 4 parameters should be present even if not used!
//middleware-controllers-MVC lesson
/*
app.use((err, req, res, next)=>{
    console.log.error(err);
    res.status(err.statusCode || 500).send(err);
});
*/

// set up request listening

const PORT = 3000;

app.listen(PORT, err =>{
    if(err){
        throw err;
    }
    console.log(`server running on port: ${PORT}`);
})
