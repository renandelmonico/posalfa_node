const http = require('http');
const fs = require('fs');

/*const router = (url, response) => {
  if (url == '/') {
    url = '/index';
  }

  const it = '.' + url + '.html';

  fs.readFile(it, (err, file) => {
    if (err) {
      response.writeHead(404, { 'Content-Type': 'text/html' });
      return response.end(fs.readFileSync('404.html'));
    }

    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end(file);
  });
}*/

const router = (url, response) => {
  const action = url.replace('/', '')
  require(`./mongoose-aula/${action}`);
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.end();
}

const server = (request, response) => {
  router(request.url, response)
};
http.createServer(server).listen(3000);

console.log('Server runing at http://localhost:3000');