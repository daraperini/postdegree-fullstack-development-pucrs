// Criação de um web service local utilizando a biblioteca Express

// Importa bibliotecas de dependência
const soap = require("soap");
const express = require("express");
const PORT = 8001;
const fs = require("fs");

// Define que a aplicação vai subir utilizando express. App é o servidor que roda express.
const app = express();

// Criamos o serviço de acordo com os parâmetros definidos no WSDL (nome: ws, port: calc). Dentro do serviço criamos a função que deve receber argumentos e retornar um objeto com a resposta.
var myservice = {
  ws: {
    calc: {
      somar: function (args) {
        var n = 1 * args.a + 1 * args.b;
        return { sumres: n };
      },
      multiplicar: function (args) {
        var n = 1 * args.a * 1 * args.b;
        return { mulres: n };
      },
    },
  },
};

// Importamos arquivo que define a WSDL utilizando Fire System - função nativa do node que lê o arquivo no formato utf8 e o sincroniza
const xml = fs.readFileSync("wscalc1.wsdl", "utf8");

// Escuta o servidor na porta 8001 e utiliza a biblioteca soap para ouvir tudo que não for padrão do app.listen (se encarrega do serviço SOAP)
app.listen(PORT, function () {
  // soap escuta o servidor, sendo que na url '/wscalc1' vai rodar o serviço myservice baseado na descrição xml e avisa no console a inicialização do servidor
  soap.listen(app, "/wscalc1", myservice, xml, function () {
    console.log("server initialized " + PORT);
  });
});
