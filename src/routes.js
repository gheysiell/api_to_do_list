const express = require('express')
const controller_to_dos = require('./controllers/controller_to_dos')
const todosRoutes = express.Router()

todosRoutes.get("/todos", controller_to_dos.find_data)
todosRoutes.post("/todos", controller_to_dos.insert_data)
todosRoutes.put("/todos", controller_to_dos.update_data)
todosRoutes.delete("/todos/:id", controller_to_dos.delete_data)

module.exports = todosRoutes