const express = require('express');


const app = express()

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


app.get('/users/:id', (req, res) => {
  const users = ["Asif", "Es", "Linn", "Al", "Ai", "It"];
  const id = req.params.id;
  console.log(req.query.sort);
  const name = users[id];
  res.send({id, name});
});

app.listen(3000, () => console.log('Litsening to port 3000'))