const {Router}= require('express');
const {getAuthById} = require('../controllers/authController.js');

const authRouter =Router();
authRouter.get('/',(req,res)=> res.send('All authors'));
authRouter.get('/:authorId', getAuthById);

module.exports = authRouter;