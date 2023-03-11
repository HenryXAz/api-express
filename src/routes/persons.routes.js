const {Router} = require('express')
const personsController = require('../controllers/persons.controller')

const personsRouter = Router()

personsRouter.get('/', personsController.all)
personsRouter.get('/:id', personsController.get)
personsRouter.post('/', personsController.create)
personsRouter.put('/:id', personsController.update)
personsRouter.delete('/:id', personsController.delete)

module.exports = personsRouter;