// build your `Resource` model here
const db = require('../../data/dbConfig'); 

module.exports = {
    getResources, 
    getResourceById, 
    addResource
}

function getResources () {
    return db('resources')
}

function getResourceById (id){
   return db('resources')
   .where({resources_id})
   .first()
   }
   
   function addResource(resource){
       return db('resources')
       .insert(resource)
       .then(ids => {
           return getResourceById(ids[0]);
       });
   }