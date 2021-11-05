
const net = require('net');

const app = net.createServer(server => {
  server.on('data', data => {
    const request = data;
    const { path, method, body } = request; 

    // if(method === 'POST' && path === '/posty'){
    //   server.write(`HTTP/1.1 200 OK
    //     Content-Type: text
    //     ${body}
    //     `);
    // }

  });
});

module.exports = app;
