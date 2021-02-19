// build your `/api/projects` router here
const express = require('express');
const Project = require('./model');

const router = express.Router();

router.get('/', (req,res) => {
Project.getProjects()
.then(projects => {
    res.status(200).json(projects)
})
.catch(error => {
    next(error)
})
})

router.post('/', (req,res) => {
    const newProject = req.body;
    Project.addProject(newProject)
    .then(project => {
        res.status(201).json(project);
    })
    .catch(error => {
        next(error)
    })
    })

router.use((err, req, res, next) => {
    res.status(500).json({
      message: "something went wrong...",
      error: err.message, 
    });
  });

module.exports = router;