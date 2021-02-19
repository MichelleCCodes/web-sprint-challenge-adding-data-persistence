// build your `Task` model here
const db = require('../../data/dbConfig'); 

module.exports = {
    getTasks,
    getTaskById, 
    addTask
}

function getTasks () {
    return db('tasks')
}

function getTaskById (id){
   return db('tasks')
   .where({id})
   .first()
   }
   
   function addTask(task){
       return db('tasks')
       .insert(task)
       .then(ids => {
           return getTaskById(ids[0]);
       });
   }