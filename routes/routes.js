const routes = require("express").Router();
const TaskController = require("../controller/TaskContoller");

routes.get("/", TaskController.getAll);

module.exports = routes;