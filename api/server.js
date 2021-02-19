// build your server here and require it from index.js
const express = require('express');

const ProjectRouter = require('./project/router');
const ResourceRouter = require('./resource/router');

const server = express();

server.use(express.json());
server.use('/api/projects', ProjectRouter);
server.use('/api/resources', ResourceRouter);

module.exports = server;