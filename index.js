const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  const fruits = {
    product: 'dada',
    price: 220
  }
  res.send(fruits);
});

app.get('/fruits/', (req, res) => {
  res.send({fruits: 'banana', quantity: 1000, price: 10000})
});

const users = ["Asif", "Es", "Linn", "Al", "Ai", "It"];

app.get('/users/:id', (req, res) => {
  const id = req.params.id;
  console.log(req.query.sort);
  const name = users[id];
  res.send({id, name});
});

app.post('/addUser', (req, res) => {
  console.log('Post request recived')
});

app.listen(3000, () => console.log('Litsening to port 3000'))