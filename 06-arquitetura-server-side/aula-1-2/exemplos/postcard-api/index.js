const express = require('express'); //express como servidor HTTP
const cors = require('cors'); //responsabilidade entre servidores
const fs = require('fs'); //módulo que permite trabalhar com arquivos (postcards.json)
const { v4: uuidv4 } = require('uuid'); //criação de ids
const port = 5000 || process.env.PORT; //porta que vai rodar localmente

const app = express();
app.use(cors());
app.use(express.json()); //módulo do express que permite olhar arquivos json

const postcardsPath = './postcards.json'; //define o caminho do arquivo json

// Rota GET para obter todos os Postcards
app.get('/postcards', (req, res) => {
  fs.readFile(postcardsPath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to read postcards data.' });
    }

    const postcards = JSON.parse(data);
    res.json(postcards); //devolve a resposta como um arquivo json contendo a data salva na constante postcards
  });
});

// Rota GET para obter um único Postcard pelo ID
app.get('/postcards/:id', (req, res) => {
  const postId = req.params.id;

  fs.readFile(postcardsPath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to read postcards data.' });
    }

    const postcards = JSON.parse(data); //pega todos os postcards
    const postcard = postcards.find((post) => post.id === postId); //procura dentro da lista pelo id passado

    if (!postcard) {
      return res.status(404).json({ error: 'Postcard not found.' });
    }

    res.json(postcard); //retorna o postcard em um arquivo json
  });
});

// Rota POST para adicionar um novo Postcard
app.post('/postcards', (req, res) => {
  const { name, cidade, pais, descricao, imageUrl } = req.body;
  //const imageUrl = `https://picsum.photos/400/300`; // Gerador automático de imagens

  const newPostcard = {
    id: uuidv4(),
    name,
    cidade,
    pais,
    descricao,
    imageUrl,
  }; //cria objeto postcard

  fs.readFile(postcardsPath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to read postcards data.' });
    }

    const postcards = JSON.parse(data);
    postcards.push(newPostcard); //pusha novo objeto no arquivo dos postcards

    fs.writeFile(postcardsPath, JSON.stringify(postcards, null, 2), (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Failed to add new postcard.' });
      }

      res.status(201).json(newPostcard); //retorna novo objeto adicionado
    });
  });
});

// Rota PUT para editar um Postcard
app.put('/postcards/:id', (req, res) => {
  const { id } = req.params;
  const { name, cidade, pais, descricao, imageUrl } = req.body;

  fs.readFile(postcardsPath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to read postcards data.' });
    }

    const postcards = JSON.parse(data);
    const postcard = postcards.find((item) => item.id === id);

    if (!postcard) {
      return res.status(404).json({ error: 'Postcard not found.' });
    }

    postcard.name = name;
    postcard.cidade = cidade;
    postcard.pais = pais;
    postcard.descricao = descricao;
    postcard.imageUrl = imageUrl;

    fs.writeFile(postcardsPath, JSON.stringify(postcards, null, 2), (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Failed to update postcard.' });
      }

      res.json(postcard);
    });
  });
});

// Rota DELETE para deletar um Postcard
app.delete('/postcards/:id', (req, res) => {
  const { id } = req.params;

  fs.readFile(postcardsPath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to read postcards data.' });
    }

    let postcards = JSON.parse(data);
    const postcardIndex = postcards.findIndex((item) => item.id === id);

    if (postcardIndex === -1) {
      return res.status(404).json({ error: 'Postcard not found.' });
    }

    postcards = postcards.filter((item) => item.id !== id); //retorna todos os postcard que tenham id diferente do id passado

    fs.writeFile(postcardsPath, JSON.stringify(postcards, null, 2), (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Failed to delete postcard.' });
      }

      res.status(204).end();
    }); //reescreve o arquivo sem o item
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
