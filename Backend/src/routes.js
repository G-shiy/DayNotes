const express = require("express");
const routes = express.Router();

const configController = require("./controllers/annotationsControllers");
const contentController = require("./controllers/contentController");
const priorityController = require("./controllers/priorityController");

//rota DATA

routes.get('/annotations', configController.read);
routes.post('/annotations',configController.create);
routes.delete('/annotations/:id', configController.delete);

//Rota priority
routes.get('/priority', priorityController.read)
routes.post('/priority/:id', priorityController.update)

//Rota do conteudo
routes.post('/contents/:id', contentController.update)

module.exports = routes;