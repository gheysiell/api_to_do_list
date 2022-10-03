const { request, response } = require('express')
const model_to_dos = require('../models/model_to_dos')

const insert_data = async (req, res) => {
    const { name } = request.body
    const todo = await model_to_dos.create({name})
    return res.status(201).json(todo)
}

const find_data = async (req, res) => {
    const todos = await model_to_dos.findAll()
    return res.status(200).json(todos)
}

const update_data = async (req, res) => {
    const {name, id, status} = req.body

    if (!id) {
        res.status(400).send("id is mandatory")
    }

    const todoAlreadyExists = await model_to_dos.findAll({
        where: {
            id: id
        }
    })

    if (!todoAlreadyExists) {
        return res.status(404).status('Todo not exists')
    }

    const todo = await model_to_dos.update({name: name, status: status}, {
        where: {
            id: id
        }
    })
    return res.status(201).send(todo)
}

const delete_data = async (req, res) => {    
    const { id } = request.params

    const intId = parseInt(id)

    if (!intId) {
        return res.status(400).send("id is mandatory.")
    }

    const todoAlreadyExists = await model_to_dos.findAll({
        where: {
            id: intId
        }
    })

    if (!todoAlreadyExists) {
        return res.status(404).send("id not exists")
    }

    await model_to_dos.delete({
        where: {
            id: intId
        }
    })

    return response.status(200).send('inserted with success.')
}

module.exports = {
    insert_data,
    find_data,
    update_data,
    delete_data,
}