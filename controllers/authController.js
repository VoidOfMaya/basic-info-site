//controller

//depndencies
const db = require('../db')

async function getAuthById(req, res){
    //gets author id from the request body parameter/req.params
    const {authorId} = req.params;
    //always try cathch to handle and log errors!
    try{
        //searches data base for an author with the same id
        const author = await db.getAuthById(Number(authorId));

        //if auther doesnt exist send 404 error else return author name
        !author ? res.status(404).send('Author not found') : res.send(`Author Name: ${author.name}`);        
    }catch(error){
        console.log(`Error retrieving author: ${error}`);
        res.status(500).send('Internal Server Error');
    }

}

module.exports ={
    getAuthById
}