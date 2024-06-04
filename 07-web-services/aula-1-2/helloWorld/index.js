// no arquivo index.js devemos subir um servidor local dando uma resposta

// utilizando uma biblioteca nativa do node declaramos que esse servidor vai rodar com o protocolo HTTP
var http = require('http'); 

// criamos servidor utilizando protocolo HTTP
http.createServer(function (req, res) {
    // inclui conteúdo do tipo texto escrito "Hello World!" na resposta
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
  }).listen(8080);