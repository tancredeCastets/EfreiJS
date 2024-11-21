const { Sequelize } = require('sequelize');

// Connexion à SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite', // Emplacement du fichier SQLite
});

// Tester la connexion
const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connexion réussie à SQLite.');
  } catch (error) {
    console.error('Impossible de se connecter à SQLite :', error);
  }
};

testConnection();

module.exports = sequelize;
