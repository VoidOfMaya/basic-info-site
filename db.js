//mock data base

const authors = [
    {id: 1, name: 'Bryan'},
    {id: 2, name: 'Christian'},
    {id: 3, name: 'jason'},
    {id: 4, name: 'jover'},
    
];

async function getAuthById(authorId){
    return authors.find(author => author.id === authorId);
};

module.exports = {
    getAuthById
};