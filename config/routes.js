const express = require('express')
const { send } = require('express/lib/response')
const routes = express.Router()

let db = [
    { '1': { Nome: 'João', Idade: '12'} },
    { '2': { Nome: 'Carlos', Idade: '31'} },
    { '3': { Nome: 'Clara', Idade: '23'} },
    { '4': { Nome: 'Joana', Idade: '42'} },
]

// Buscar dados da api
routes.get('/', (req, res) => {
    return res.json(db)
})

routes.post('/add', (req, res) => {
    const body = req.body

    if(!body)
        return res.status(400).end()

    db.push(body)
    return res.json(body)
})

routes.delete('/:id', (req, res) => {
    const id = req.params.id

    let newDB = db.filter(item => {
        if(!item[id])
            return item
    })

    db = newDB

    return res.send(newDB)
})


module.exports = routes

