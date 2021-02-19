// build your `Project` model here
const db = require('../../data/dbConfig'); 

//export functions 
module.exports = {
 getProjects
}

function getProjects () {
    return db('projects')
}
