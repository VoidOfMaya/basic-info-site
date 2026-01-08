// this is not part of the first backend node project
//rather an extension of following lessons

//import dependancies
const express = require ('express');
const authRouter = require ('./routes/authorRouter');
const bookRouter = require ('./routes/booksRouter');
const indexRouter = require ('./routes/indexRouter');

//create express server
const app = express();


//set up routing middleware

//app.use('/authors', authRouter);
//app.use('/books', bookRouter);
//app.use('/', indexRouter);

function middleware1(req, res, next) {
  console.log("Middleware 1");
  //next();  Pass control to the next middleware
};
console.log('im still standing! yeah yeah yeah!')

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
app.use(middleware3)

//seting up error handeling middleware
//  note: for express torecognize this as error handler middleware
//        ALL 4 parameters should be present even if not used!
app.use((err, req, res, next)=>{
    console.log.error(err);
    res.status(err.statusCode || 500).send(err);
});

// set up request listening

const PORT = 3000;

app.listen(PORT, err =>{
    if(err){
        throw err;
    }
    console.log(`server running on port: ${PORT}`);
})
