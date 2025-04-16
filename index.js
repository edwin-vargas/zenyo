import express from 'express';
import cors from 'cors'; // Import the cors middleware

const app = express();

// Allow CORS only from http://200.68.166.160
// const corsOptions = {
//     origin: 'http://200.68.166.160',  // You can also allow HTTPS if needed.
//     optionsSuccessStatus: 200 // Some legacy browsers choke on 204
// };

app.use(cors());

app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.ip} ${req.method} ${req.originalUrl}`);
    next();
});


app.get('/', (req, res) => {
    res.send('Hola, este es un texto simple.');
});

const PORT = 5566;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});

