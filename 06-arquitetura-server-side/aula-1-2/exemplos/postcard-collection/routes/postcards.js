var express = require("express");
var router = express.Router();
const { v4: uuidv4 } = require("uuid");
const { listAll, listOne, add, remove, addMongo, listAllMongo } = require("../controllers/postcards");

// Rota GET para obter todos os Postcards
router.get("/", (req, res) => {
  listAllMongo(res); //chama função controller que lista itens
});

// Rota GET para obter um único Postcard pelo ID
router.get("/:id", (req, res) => {
  listOne(req.params.id, res); //envia res como parâmetro para conseguir incluir o postcard como json na res
});

// Rota POST para adicionar um novo Postcard
router.post("/", (req, res) => {
  addMongo(res, req.body);
});

// Rota DELETE para deletar um Postcard
router.delete("/:id", (req, res) => {
  remove(res, req.params.id);
});

module.exports = router;
