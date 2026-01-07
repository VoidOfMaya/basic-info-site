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

// set up request listening

const PORT = 3000;

app.listen(PORT, err =>{
    if(err){
        throw err;
    }
    console.log(`server running on port: ${PORT}`);
})