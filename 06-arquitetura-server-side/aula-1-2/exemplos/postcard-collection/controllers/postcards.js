const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const { MongoClient, ObjectId } = require("mongodb"); //banco de dados que substitui o json usado anteriormente
const postcardsPath = "./postcards.json"; //substituido belo mongodb

const url = "mongodb://localhost:27017"; //local onde vai rodar o banco de dados localmente
const dbName = "postcardsDB"; //nome do banco de dados
const collectionName = "postcards"; //collection que o banco de dados utiliza

//funções postcardsPath
function listAll(res) {
  fs.readFile(postcardsPath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Failed to read postcards data." });
    }

    const postcards = JSON.parse(data);
    res.json(postcards); //devolve a resposta como um arquivo json contendo a data salva na constante postcards
  });
}

function listOne(postId, res) {
  fs.readFile(postcardsPath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Failed to read postcards data." });
    }

    const postcards = JSON.parse(data); //pega todos os postcards
    const postcard = postcards.find((post) => post.id === postId); //procura dentro da lista pelo id passado

    if (!postcard) {
      return res.status(404).json({ error: "Postcard not found." });
    }

    res.json(postcard); //retorna o postcard em um arquivo json dentro da res recebida como parâmetro
  });
}

function add(res, req) {
  const { name, cidade, pais, descricao, imageUrl } = req;

  const newPostcard = {
    id: uuidv4(),
    name,
    cidade,
    pais,
    descricao,
    imageUrl,
  }; //cria objeto postcard

  fs.readFile(postcardsPath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Failed to read postcards data." });
    }

    const postcards = JSON.parse(data);
    postcards.push(newPostcard); //pusha novo objeto no arquivo dos postcards

    fs.writeFile(postcardsPath, JSON.stringify(postcards, null, 2), (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Failed to add new postcard." });
      }

      res.status(201).json(newPostcard); //retorna novo objeto adicionado
    });
  });
}

function remove(res, req) {
  const id = req;

  fs.readFile(postcardsPath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Failed to read postcards data." });
    }

    let postcards = JSON.parse(data);
    const postcardIndex = postcards.findIndex((item) => item.id === id);

    if (postcardIndex === -1) {
      return res.status(404).json({ error: "Postcard not found." });
    }

    postcards = postcards.filter((item) => item.id !== id); //retorna todos os postcard que tenham id diferente do id passado

    fs.writeFile(postcardsPath, JSON.stringify(postcards, null, 2), (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Failed to delete postcard." });
      }

      res.status(204).end();
    }); //reescreve o arquivo sem o item
  });
}

//funções MongoDB
async function addMongo(res, req) {
  const { name, cidade, pais, descricao, imageUrl } = req;

  const newPostcard = {
    id: uuidv4(),
    name,
    cidade,
    pais,
    descricao,
    imageUrl,
  }; //cria objeto postcard

  const client = new MongoClient(url); //cria um cliente na url passada

  try {
    await client.connect();

    const db = client.db(dbName); //associa o nome dado na constante dbName ao db
    const collection = db.collection(collectionName); //cria uma collection no db com o nome da constante collectionName
    const result = await collection.insertOne(newPostcard); //insere um novo Postcard à collection

    newPostcard._id = result.insertedId; //declara o id do newPostcard como o id gerado pelo mongoDB

    res.status(201).json(newPostcard); // responde com um json contendo o newPostcard
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to add new postcard." });
  } finally {
    await client.close();
  }
}

async function listAllMongo(res) {

    const client = new MongoClient(url)

    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const postcards = await collection.find().toArray();
        res.json(postcards)
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to read postcard data.'});
    } finally {
        await client.close();
    }
}

//funções postcardsPath
exports.listAll = listAll;
exports.listOne = listOne;
exports.add = add;
exports.remove = remove;

//funções MongoDB
exports.addMongo = addMongo;
exports.listAllMongo = listAllMongo;
