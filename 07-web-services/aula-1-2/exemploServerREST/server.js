// Criação de servidor node local para utilização de API REST com definição de rotas

const express = require("express");
const app = express();
const PORT = 3010;

// Utiliza propriedade do express para poder interpretar aquivos JSON
app.use(express.json());

// Define a formatação dos caracteres da aplicação permitindo aninhamento (extended: true) (JSON trabalha com aninhamento)
app.use(express.urlencoded({ extended: true }));

// Define porta e inicializa o servidor
app.listen(PORT, function () {
  console.log("server initialized " + PORT);
});

// Requer o arquivo routes/index para inicializar o servidor
require("./src/routes/index")(app);
