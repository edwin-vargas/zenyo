// server.js
import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hola, este es un texto simple.');
});

const PORT = 5566;
app.listen(PORT, () => {
    console.log(`Servidor Express escuchando en http://localhost:${PORT}`);
});
