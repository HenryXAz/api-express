const express = require('express')
const personsRouter = require('./routes/persons.routes.js')
const cors = require('cors')
const path = require('path')

const app = express()

const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '/templates/index.html'))
})

app.use('/api/persons',personsRouter)

app.listen(PORT, () => {
  console.log(`server running at ${PORT}`);
})
