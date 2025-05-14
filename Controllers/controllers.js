import fs from 'fs';
import path from 'path'; 
import { randomUUID } from 'crypto';

const dataPath = path.resolve('Database/base.json');

const dogsController = {
    getAllDogs: (req, res) => {
        fs.readFile(dataPath, 'utf-8', (err, data) => {
            if (err) return res.status(500).send('Erreur de lecture du fichier');
            res.json(JSON.parse(data));
        });
    }
}

export default dogsController;