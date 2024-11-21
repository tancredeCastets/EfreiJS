const express = require('express');
const app = express();
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:8080' // Permet l’accès uniquement de mon localhost
}));

app.post('/api/add-item', (req, res) => {
    // Accéder aux données envoyées dans la requête POST via req.body
    const newItem = req.body;
    console.log(newItem); // Traiter l'item reçu (comme l'ajouter dans une base de données)
  
    // Envoyer une réponse au client
    res.status(201).send('Item ajouté avec succès');
  });


  const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'pelle'  },
  ];
  app.get('/api/items', (req, res) => {
    res.json(items);
  });
  
  app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from the server!' });
  });
  

  app.post('/api/add-item', (req, res) => {
    // Accéder aux données envoyées dans la requête POST via req.body
    const newItem = req.body;
    console.log(newItem); // Traiter l'item reçu (comme l'ajouter dans une base de données)
  
    // Envoyer une réponse au client
    res.status(201).send('Item ajouté avec succès');
  });

  app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
  
    // Exemple de vérification avec des données fictives
    if (email === "test@example.com" && password === "password123") {
      res.json({ success: true, token: "fake-jwt-token" });
    } else {
      res.json({ success: false, message: "Identifiants incorrects" });
    }
  });
  
  // Connexion à la base de données SQLite
const db = new sqlite3.Database('./database.db', (err) => {
  if (err) {
      console.error('Erreur de connexion à la base de données :', err);
  } else {
      console.log('Connecté à la base de données SQLite');
  }
});

// Endpoint pour récupérer tous les produits
app.get('/products', (req, res) => {
  db.all('SELECT * FROM products', [], (err, rows) => {
      if (err) {
          res.status(500).json({ error: err.message });
      } else {
          res.json(rows);
      }
  });
});

