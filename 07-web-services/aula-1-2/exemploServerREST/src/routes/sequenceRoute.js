// Arquivo que define as rotas de sequência

// Define o controller
const SequenceController = require("../controllers/sequenceController");

// Define o que deve ser executado quando existe uma requisição com x verbo na rota "/sequence" ou "/sequence/:id"
// Vai ser executado de acordo com as definições do arquivo controllers/sequenceController
module.exports = (app) => {
  app.post("/sequence", SequenceController.post);
  app.put("/sequence/:id", SequenceController.put);
  app.delete("/sequence/:id", SequenceController.delete);
  app.get("/sequence", SequenceController.get);
  app.get("/sequence/:id", SequenceController.getById);
};
