const sqlite3 = require('sqlite3').verbose();

// Connexion à la base de données
const db = new sqlite3.Database('./database.db', (err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données :', err);
  } else {
    console.log('Base de données créée/connectée avec succès.');
  }
});

// Création de la table 'products'
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      category TEXT NOT NULL,
      description TEXT NOT NULL,
      price REAL NOT NULL,
      imagePath TEXT NOT NULL
    )
  `, (err) => {
    if (err) {
      console.error('Erreur lors de la création de la table :', err);
    } else {
      console.log('Table "products" créée avec succès.');

      // Vérifie si des données existent déjà
      db.get('SELECT COUNT(*) AS count FROM products', (err, row) => {
        if (err) {
          console.error('Erreur lors de la vérification des données :', err);
        } else if (row.count === 0) {
          console.log('Aucune donnée trouvée. Insertion des données exemple...');
          insertExampleData();
        } else {
          console.log('Données déjà présentes, aucune insertion effectuée.');
        }
      });
    }
  });
  db.serialize(() => {
    db.run(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL
      )
    `, (err) => {
      if (err) {
        console.error('Erreur lors de la création de la table "users":', err);
      } else {
        console.log('Table "users" créée avec succès.');
      }
    });
  });
});

// Fonction pour insérer des données exemple
function insertExampleData() {
  const insertStmt = db.prepare(`
    INSERT INTO products (name, category, description, price, imagePath)
    VALUES (?, ?, ?, ?, ?)
  `);

  // Données pour 'Outils de base'
  insertStmt.run('Marteau multifonction', 'Outils de base', 'Marteau pour clouage et démolition.', 15.99,'marteau.png');
  insertStmt.run('Perceuse-visseuse électrique', 'Outils de base', 'Rechargeable avec embouts multiples.', 45.50,'perceuse.png');
  insertStmt.run('Tournevis à cliquet', 'Outils de base', 'Kit avec différentes têtes.', 22.99,'tournevis');
  insertStmt.run('Scie à main universelle', 'Outils de base', 'Scie pour bois, plastique et autres matériaux.', 12.75,'scie.png');
  insertStmt.run('Mètre ruban', 'Outils de base', 'Mètre ruban 3m avec verrouillage.', 7.99,'metre.png');

  // Données pour 'Matériaux de construction'
  insertStmt.run('Ciment en sac', 'Matériaux de construction', 'Ciment pour travaux de maçonnerie.', 5.99,'ciment.png');
  insertStmt.run('Briques creuses', 'Matériaux de construction', 'Pour murs porteurs ou cloisons.', 1.50,'brique.png');
  insertStmt.run('Plaques de plâtre', 'Matériaux de construction', 'Plaques pour cloisons sèches.', 8.25,'plaquedeplatre.png');
  insertStmt.run('Tuiles en terre cuite', 'Matériaux de construction', 'Pour toiture et décoration.', 2.10,'tuiles.png');
  insertStmt.run('Sable à maçonner', 'Matériaux de construction', 'Sable pour béton et mortier.', 4.80,'sable.png');

  // Données pour 'Équipements de protection'
  insertStmt.run('Casque de sécurité', 'Équipements de protection', 'Casque anti-chocs, ajustable.', 18.99,'casque.png');
  insertStmt.run('Gants anti-coupure', 'Équipements de protection', 'Gants résistants pour manipulation.', 9.99,'gants.png');
  insertStmt.run('Lunettes de protection', 'Équipements de protection', 'Lunettes contre éclats et poussières.', 7.50,'lunnette-ProcessingInstruction.png');
  insertStmt.run('Chaussures de sécurité', 'Équipements de protection', 'Chaussures avec embout renforcé.', 25.00,'chaussure.png');
  insertStmt.run('Masques respiratoires FFP2', 'Équipements de protection', 'Masques contre poussière et particules.', 3.75,'masque-ffp2.png');

  insertStmt.finalize();
  console.log('Données d\'exemple insérées.');
}

// Fermer la base de données
db.close((err) => {
  if (err) {
    console.error('Erreur lors de la fermeture de la base de données :', err);
  } else {
    console.log('Base de données fermée.');
  }
});
