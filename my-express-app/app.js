const express = require('express');
const app = express();
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const multer = require('multer');
require('./setupDb');


// Middleware pour JSON et CORS
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:8080' // Permet uniquement l'accès depuis le frontend en local
}));

// Serveur de base
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Connexion à la base de données SQLite
const db = new sqlite3.Database('./database.db', (err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données :', err);
  } else {
    console.log('Connecté à la base de données SQLite');
  }
});

// **1. Endpoint pour récupérer tous les produits**
app.get('/products', (req, res) => {
  db.all('SELECT * FROM products', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(rows); // Retourne tous les produits
    }
  });
});

// **2. Endpoint pour ajouter un produit**
app.post('/products', (req, res) => {
  const { name, category, description, price } = req.body;

  if (!name || !category || !description || !price) {
    return res.status(400).json({ error: 'Tous les champs sont requis.' });
  }

  const query = `INSERT INTO products (name, category, description, price) VALUES (?, ?, ?, ?)`;
  db.run(query, [name, category, description, price], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(201).json({ id: this.lastID, name, category, description, price });
    }
  });
});

// **3. Endpoint pour mettre à jour un produit**
app.put('/products/:id', (req, res) => {
  const { id } = req.params;
  const { name, category, description, price } = req.body;

  if (!name || !category || !description || !price) {
    return res.status(400).json({ error: 'Tous les champs sont requis.' });
  }

  const query = `UPDATE products SET name = ?, category = ?, description = ?, price = ? WHERE id = ?`;
  db.run(query, [name, category, description, price, id], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (this.changes === 0) {
      res.status(404).json({ error: 'Produit non trouvé.' });
    } else {
      res.json({ message: 'Produit mis à jour avec succès.' });
    }
  });
});

// **4. Endpoint pour supprimer un produit**
app.delete('/products/:id', (req, res) => {
  const { id } = req.params;

  const query = `DELETE FROM products WHERE id = ?`;
  db.run(query, [id], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (this.changes === 0) {
      res.status(404).json({ error: 'Produit non trouvé.' });
    } else {
      res.json({ message: 'Produit supprimé avec succès.' });
    }
  });
});

// **5. Endpoint pour récupérer un produit spécifique par son ID**
app.get('/products/:id', (req, res) => {
  const { id } = req.params;

  const query = `SELECT * FROM products WHERE id = ?`;
  db.get(query, [id], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (!row) {
      res.status(404).json({ error: 'Produit non trouvé.' });
    } else {
      res.json(row);
    }
  });
});

// **6. Endpoint de login (existant)**
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  // Exemple de vérification avec des données fictives
  if (email === 'test@example.com' && password === 'password123') {
    res.json({ success: true, token: 'fake-jwt-token' });
  } else {
    res.json({ success: false, message: 'Identifiants incorrects' });
  }
});

// **7. Endpoint pour récupérer des items fictifs (existant)**
app.get('/api/items', (req, res) => {
  res.json(items);
});

// **8. Endpoint pour ajouter un item fictif (existant)**
app.post('/api/add-item', (req, res) => {
  const newItem = req.body;
  console.log(newItem); // Traiter l'item reçu (comme l'ajouter dans une base de données)

  // Envoyer une réponse au client
  res.status(201).send('Item ajouté avec succès');
});

// Serveur écoute sur un port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Configurez multer pour stocker les fichiers dans le répertoire "uploads" et accepter seulement les fichiers image
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);  // Nom de fichier unique
  }
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
    if (extname && mimetype) {
      return cb(null, true);
    }
    cb('Erreur : fichiers uniquement avec des extensions image (jpeg, jpg, png, gif)');
  }
});

// Route pour uploader l'image
app.post('/upload', upload.single('image'), (req, res) => {
  if (req.file) {
    res.json({
      message: 'Image téléchargée avec succès',
      file: req.file.filename  // Vous renverrez le nom du fichier pour pouvoir le récupérer dans le frontend
    });
  } else {
    res.status(400).json({ message: 'Erreur : Veuillez télécharger une image' });
  }
});

// Route pour servir les images
app.use('/uploads', express.static('uploads'));


// Endpoint pour enregistrer une commande
app.post('/orders', (req, res) => {
  const { customerName, address, cart, total } = req.body;

  if (!customerName || !address || !cart || !total) {
    return res.status(400).json({ error: 'Tous les champs sont requis.' });
  }

  const query = `INSERT INTO orders (customerName, address, total, cart) VALUES (?, ?, ?, ?)`;
  db.run(query, [customerName, address, total, JSON.stringify(cart)], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(201).json({ message: 'Commande enregistrée avec succès.', orderId: this.lastID });
    }
  });
});

// Endpoint pour récupérer toutes les commandes
app.get('/orders', (req, res) => {
  db.all('SELECT * FROM orders', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(rows);
    }
  });
});
