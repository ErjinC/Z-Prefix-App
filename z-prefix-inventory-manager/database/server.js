const express = require('express');
const app = express();
const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV||'development'])
const port = 8080;
const cors = require("cors");

app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(express.json());

app.get('/', (request, response) => {
  response.status(200).send('Welcome to the inventory DB')
})

app.get('/inventory', (request, response) => {
  knex('items')
  .select('*')
  .then(data => response.status(200).send(data))
})

app.get('/item/:id', (request, response) => {
  let query = request.params.id
  knex('items')
  .select('*')
  .where('id', '=', query)
  .then(data => response.status(200).send(data))
})

app.post('/login', (request, response) => {
  knex('users')
  .select('*')
  .where('username', 'like', request.body[0].username)
  .then(data => response.status(200).send(data))
})

app.post('/register', (request, response) => {
  knex('users')
  .count('*')
  .where('username', 'like', request.body[0].username)
  .then(data => {
    if (data[0].count > 0) {
      console.log('Duplicate Entry!')
    } else {
      knex('users')
      .select('*')
      .insert(request.body)
      .then(data => response.status(201))
    }
  })
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})