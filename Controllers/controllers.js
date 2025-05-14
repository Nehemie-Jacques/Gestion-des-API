import fs from "fs";
import path from "path";
import { randomUUID } from "crypto";

const dataPath = path.resolve("Database/base.json");

const dogsController = {
  getAllDogs: (req, res) => {
    fs.readFile(dataPath, "utf-8", (err, data) => {
      if (err) return res.status(500).send("Erreur de lecture du fichier");
      res.json(JSON.parse(data));
    });
  },
  createDog: (req, res) => {
    const { name, age, breed } = req.body;
    if (!name || !age || !breed)
      return res.status(400).send("Tous les champs sont requis"); 

    fs.readFile(dataPath, "utf-8", (err, data) => {
      if (err) return res.status(500).send("Erreur de lecture du fichier"); 

      const dogs = JSON.parse(data);

      if (dogs.find((d) => d.name === name)) {
        return res.status(400).send("Ce chien existe déjà"); 
      }
      dogs.push({ id: randomUUID(), name, age, breed });
      fs.writeFile(dataPath, JSON.stringify(dogs), 'utf-8', (err) => {
        if (err) return res.status(500).send('Erreur écriture');
        res.status(201).send('Chien créé')
      })

    });
  },
}

export default dogsController;
