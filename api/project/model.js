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

function getProjectById(id) {
  return db("projects").where({ id }).first();
}

function addProject(project) {
  return db("projects")
    .insert(project)
    .then((ids) => {
      return getProjectById(ids[0]);
    });
}
