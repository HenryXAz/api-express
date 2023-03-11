const persons = require('../services/persons.json')
const {v4} = require('uuid')

const personsController = {};

personsController.all = (req,res) => {
  return res.json(
    persons
  )
};

personsController.get = (req, res ) => {
  const { id } = req.params
  const person = persons.find((person) => person.id === id)

  if(!person) {
    return res.status(404).json(
      {
        status: "not found"
      }
    )
  }

  return res.status(200).json(
    person,
  )
}

personsController.create = (req,res) => {
  const {name, profession} = req.body

  const id = v4 ()

  if((name === "" || name === undefined) && (profession === "" || profession === undefined)) {
    return res.status(400).json(
      {
        status: 'name and profession is required',
      }
    )
  }

  if(name === "" || name === undefined) {
    return res.status(400).json(
      {
        status: "name is required"
      },
    )
  } 

  if(profession === "" || profession === undefined) {
    return res.status(400).json(
      {
        status: 'profession is required',
      }
    )
  }

  const person = persons.push({
    id,
    name,
    profession,
  })

  return res.status(201).json(
    {
      name,
      profession,
    },
  )
}

personsController.update = (req,res) => {
  const {id} = req.params
  const {name, profession} = req.body

  const person = persons.find(person => person.id === id)

  if(!person) {
    return res.status(404).json(
      {
        status:'person not found'
      }
    )
  }

  person.name = name
  person.profession = profession

  return res.status(200).json(
    {
      status: `${id} updated successfully`,
    }
  )

}

personsController.delete = (req,res) => {
  const { id } = req.params

  const person = persons.find(person => person.id === id)


  if(!person) {
    return res.status(404).json(
      {
        status: 'person not found',
      }
    )
  }

  persons.splice(persons.indexOf(person), 1)

  return res.status(200).json(
    {
      status: `${id} deleted successfully`,
    }
  )
}

module.exports = personsController