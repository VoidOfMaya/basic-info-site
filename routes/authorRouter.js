const {Router}= require('express');

const authRouter =Router();

authRouter.get('/',(req,res)=> res.send('All authors'));
authRouter.get('/:authorId', (req, res) =>{
    const{authorId} = req.params;
    res.send(`Author ID: ${authorId}`);
})

module.exports = authRouter;