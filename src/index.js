const express = require('express')
const personsRouter = require('./routes/persons.routes.js')
const cors = require('cors')

const app = express()

const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.get('/', (req,res) => {
  res.send('home page')
})

app.use('/api/persons',personsRouter)

app.listen(PORT, () => {
  console.log(`server running at ${PORT}`);
})
