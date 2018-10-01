const express = require('express')
const app = express()
const port = 3000

app.get('/hello/:name', function(req, res) {
    res.send(JSON.stringify({"hello":req.params.name}));
  });

   
app.get('/*', (request, response) => {
  response.send('Laboratorio 4 Javier Rosales, por favor ingrese a /hello/:\<name\> para recibir un JSON')
})
app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})