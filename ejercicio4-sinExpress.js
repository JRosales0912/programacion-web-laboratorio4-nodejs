const http = require('http');
const port = 3000;

const requestHandler = (request, response) => {
  var urlReq = request.url.split('/');
  console.log(urlReq)
  if(urlReq)
  {
    console.log(urlReq.length)
    if(urlReq.length>2 && urlReq.length<4 )
    {
      if(urlReq[1]=='hello')
      {
        if(urlReq[2].match(/^:/))
        {
          response.end(JSON.stringify({'hello':urlReq[2].replace(':', "")}))
        }
        else
        {
          response.end('Laboratorio 4 Javier Rosales, por favor ingrese a /hello/:\<name\> para recibir un JSON')
        }
      }
      else
      {
        response.end('Laboratorio 4 Javier Rosales, por favor ingrese a /hello/:\<name\> para recibir un JSON')
      }
    }
    else
    {
      response.end('Laboratorio 4 Javier Rosales, por favor ingrese a /hello/:\<name\> para recibir un JSON')
    }
  }
  else
  {
    response.end('Laboratorio 4 Javier Rosales, por favor ingrese a /hello/:\<name\> para recibir un JSON')
  }
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})