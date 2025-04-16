import express from 'express';
import cors from 'cors'; // Import the cors middleware

const app = express();

// Enable CORS for all origins (for development - be more specific in production)
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hola, este es un texto simple.');
});

const PORT = 5566;
app.listen(PORT, () => {
    console.log(`Servidor Express escuchando en http://localhost:${PORT}`);
});