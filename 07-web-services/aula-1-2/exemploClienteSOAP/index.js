// Criação de cliente SOAP para consumo do web service de calculadora, para executar operações matemáticas básicas

// Dependência da funcionalidade client
const soap = require("soap");

// URL do wsdl do web service que precisamos consumir
var url = "http://www.dneonline.com/calculator.asmx?wsdl";

// Cria cliente passando url do serviço que será consumido
soap.createClient(url, function (err, client) {
  // Descreve o WSDL de uma forma mais legível
  console.log("Descrever o WSDL", client.describe().Calculator.CalculatorSoap);

  // Cliente consome as funcionalidades do web service
  client.Add({ intA: 19, intB: 21 }, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log('A soma é:', result.AddResult);
    }
  });

  client.Subtract({ intA: 19, intB: 21 }, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log('A subtração é:', result.SubtractResult);
    }
  });

  client.Multiply({ intA: 20, intB: 2 }, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log('A multiplicação é:', result.MultiplyResult);
    }
  });

  client.Divide({ intA: 19, intB: 21 }, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log('A divisão é:', result.DivideResult);
    }
  });
});
