const {Router}= require('express');

const indexRouter =Router();
//get

indexRouter.get('/', (req, res) =>{
    res.send(`on Main router`);
})


module.exports = indexRouter;