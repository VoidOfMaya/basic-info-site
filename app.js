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

app.use('/authors', authRouter);
app.use('/books', bookRouter);
app.use('/', indexRouter);
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
