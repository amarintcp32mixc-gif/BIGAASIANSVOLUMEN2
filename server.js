const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
let estado = "OFF";
app.get('/on', (req, res) => {
estado = "ON";
res.send("OK");
});
app.get('/off', (req, res) => {
estado = "OFF";
res.send("OK");
});
app.get('/estado', (req, res) => {
res.send(estado);
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
console.log("Servidor iniciado");
});
