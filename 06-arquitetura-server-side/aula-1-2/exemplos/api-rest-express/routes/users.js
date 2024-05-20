var express = require('express');
var router = express.Router();

/* GET users lista. */
router.get('/', function(req, res, next) {
  res.send('Lista todos Usuários');
});

/* GET users por id. */
router.get('/:id', function(req, res, next) {
  const id = req.params.id
  res.send(`Lista Usuário de id = ${id} `);
});

/* POST user .*/
router.post('/', (req, res) => {
  res.send('Cria um Usuários')
});

/* DELETE User. */
router.delete('/',(req,res) => {
  res.send('Deleta um usuário')
});

/* PUT User altera*/
router.put('/', (req,res) => {
  res.send('Altera Usuario')
});

module.exports = router;
