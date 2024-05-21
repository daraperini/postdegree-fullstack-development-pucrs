var express = require('express');
const { MongoClient } = require('mongodb');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'PostCard Collection' });
// });

const url = "mongodb://localhost:27017"; //local onde vai rodar o banco de dados localmente
const dbName = "postcardsDB"; //nome do banco de dados
const collectionName = "postcards"; //collection que o banco de dados utiliza

router.get("/", async (req, res) => {
  const client = new MongoClient(url);
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const postcards = await collection.find().toArray();
    console.log(postcards);
    res.render("index", { postcards });
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao obter os postcards.");
  }
});

module.exports = router;
