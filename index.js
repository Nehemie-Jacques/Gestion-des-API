import express from 'express';
import bodyParser from 'body-parser'; 
import dogsRoutes from './Routes/routes.js';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/dogs', dogsRoutes);

app.listen(port, () => {
    console.log(`Serveur lancé sur http://localhost:${port}`);
})