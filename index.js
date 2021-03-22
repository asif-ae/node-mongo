const express = require('express');


const app = express()

app.get('/', (req, res) => res.send('Thank you very mutch'))

app.listen(3000, () => console.log('Litsening to port 3000'))