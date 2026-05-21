const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
let estadoBuzzer = "OFF";
app.get('/buzzer/on', (req, res) => {
estadoBuzzer = "ON";
res.send("OK");
});
app.get('/buzzer/off', (req, res) => {
estadoBuzzer = "OFF";
res.send("OK");
});
app.get('/buzzer/estado', (req, res) => {
res.send(estadoBuzzer);
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
console.log("Servidor iniciado");
});