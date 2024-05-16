const express = require("express");

const app = express();
const port = 5002;

// Rota principal que responde com "Olá mundo | EXPRESS"
app.get("/", (req, res) => {
  res.send("Olá mundo | EXPRESS");
});

app.get("/rota", (req, res) => {
  let numeroRota = req.params.numeroRota;
  res.send(`ROTA ${numeroRota} - Olá mundo | EXPRESS`);
});

app.get("/dara", (req, res) => {
  res.send(`ROTA - Olá Dara | EXPRESS`);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
