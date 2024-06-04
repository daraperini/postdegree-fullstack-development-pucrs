// Criação de cliente SOAP para consumo do web service dos Correios

const soap = require("soap");
var url = "https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl";

soap.createClient(url, function(err, res) {
    // console.log("Descrever o WSDL", res.describe().AtendeClienteService.AtendeClientePort)

    res.consultaCEP({cep: '95032190'}, function (err, res) {
        if (err) {
            console.log(err)
        } else {
            console.log(res)
        }
    })
})