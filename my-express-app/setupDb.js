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
            price REAL NOT NULL
        )
    `, (err) => {
        if (err) {
            console.error('Erreur lors de la création de la table :', err);
        } else {
            console.log('Table "products" créée avec succès.');
        }
    });

    // Insertion de données exemple (optionnel)
    const insertStmt = db.prepare(`
        INSERT INTO products (name, category, description, price)
        VALUES (?, ?, ?, ?)
    `);

    insertStmt.run('Marteau multifonction', 'Outils de base', 'Marteau pour clouage et démolition.', 15.99);
    insertStmt.run('Perceuse-visseuse électrique', 'Outils de base', 'Rechargeable avec embouts multiples.', 45.50);
    insertStmt.finalize();

    console.log('Données d\'exemple insérées.');
});

// Fermer la base de données
db.close((err) => {
    if (err) {
        console.error('Erreur lors de la fermeture de la base de données :', err);
    } else {
        console.log('Base de données fermée.');
    }
});
