
const net = require('net');
const createRes = require('./lib/createRes');
const parse = require('./lib/parse');

const app = net.createServer(server => {
  server.on('data', data => {
    const request = parse(data.toString());
    const { path, method, body } = request; 

    if(method === 'POST' && path === '/posty'){
      server.write(`HTTP/1.1 200 OK
        Content-Type: text
        ${body}
        `);
    } else (method === 'GET' && path '/getit'){
      server.write
      (createRes({status:'200 OK', body: '<h1>Sup Friend? </hi>', contentType: 'text/html'})
        )
    }
  });
});

module.exports = app;
