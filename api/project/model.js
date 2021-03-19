// build your `Project` model here
const db = require("../../data/dbConfig");

//export functions
module.exports = {
  getProjects,
  addProject,
};

function getProjects() {
  return db("projects");
}

function addProject(project) {
  return db("projects")
    .insert(project)
    .then((ids) => {
      return db('projects').where({project_id: ids[0]});
    });
}
