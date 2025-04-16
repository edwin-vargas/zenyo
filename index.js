import express from 'express';
import cors from 'cors'; // Import the cors middleware

const app = express();

// Allow CORS only from http://200.68.166.160
const corsOptions = {
    origin: 'http://200.68.166.160',  // You can also allow HTTPS if needed.
    optionsSuccessStatus: 200 // Some legacy browsers choke on 204
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.send('Hola, este es un texto simple.');
});

const PORT = 5566;
app.listen(PORT, () => {
    console.log(`Servidor Express escuchando en http://localhost:${PORT}`);
});
