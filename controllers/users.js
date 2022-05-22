/* eslint-disable object-shorthand */
const express = require('express')

const User = require('../models/user')

const userController = express.Router()

userController.post('/create', (req, res) => {
    User.create(req.body)
        .then((doc) => res.status(201).send([doc]))
        .catch((err) => {
            console.log(err)
            res.status(400).send('Bad Request')
        })
})

userController.get('/:id', (req, res) => {
    const { id } = req.params
    User.findByPk(id)
        .then((doc) => res.status(200).send([doc]))
        .catch((err) => {
            console.log(err)
            res.status(401).send('RESSOURCE NOT FOUND')
        })
})

userController.post('/search', (req, res) => {
    User.findAndCountAll({ include: { all: true } })
        .then((result) => res.status(200).send([result]))
        .catch((err) => {
            console.log(err)
            res.status(500).send('SERVER ERROR')
        })
})

userController.delete('/:id', (req, res) => {
    const { id } = req.params
    User.destroy({
        where: {
            id: id,
        },
    })
        .then((deletedRecord) => {
            if (deletedRecord === 1) res.status(200).send('RESSOURCE DELETED')
            else res.status(404).send('RESSOURCE NOT FOUND')
        })
        .catch((err) => {
            console.log(err)
            res.status(500).send('SERVER ERROR')
        })
})

userController.patch('/:id', (req, res) => {
    const { id } = req.params
    User.update(req.body, {
        where: {
            id: id,
        },
    })
        .then(() => {
            User.findByPk(id).then((user) => res.status(200).send([user]))
        })
        .catch((err) => {
            console.log(err)
            res.status(500).send('RESSOURCE NOT FOUND')
        })
})

userController.post('/competences/create', (req, res) => {
    const { CompetenceId } = req.body
    const { UserId } = req.body
    const { type } = req.body
    const { group } = req.body
    console.log(typeof CompetenceId, 'TYPE OF COMPETENCE ID')
    console.log(req.body, 'REQ BODY')

    User.findByPk(UserId)
        .then((user) => {
            user.addCompetence(CompetenceId, {
                through: {
                    type: parseInt(type, 10),
                    group: parseInt(group, 10),
                },
            })
        })
        .then((result) => {
            res.status(200).send(result)
        })
        .catch((err) => {
            console.log(err)
            res.status(500).send('SERVER ERROR')
        })
})

module.exports = userController
