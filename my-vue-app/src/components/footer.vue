<template>
  <div class="footer-container">
    <div class="footer-content">
      <h2>Contactez-nous</h2>
      <div class="contact-info">
        <p>
          <span class="icon">📍</span>
          <strong>Adresse : </strong> 123 Rue des Outils, 75000 Paris
        </p>
        <p>
          <span class="icon">📞</span>
          <strong>Téléphone : </strong> +33 1 23 45 67 89
        </p>
        <p>
          <span class="icon">✉️</span>
          <strong>Email : </strong>
          <a href="mailto:contact@bricolage-store.com" class="email-link">
            contact@bricolage-store.com
          </a>
        </p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2024 Bricolage Store - Tous droits réservés</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'monFooter',
};
</script>

<style scoped>
/* Conteneur principal du footer */
.footer-container {
  background-color: #2f4f4f; /* Gris-bleu pour un effet robuste et professionnel */
  color: #f1f1f1; /* Texte en blanc cassé pour un contraste doux */
  padding: 40px 0;
  width: 100%;
  border-top: 2px solid #ff6347; /* Ligne de séparation en orange pour plus de contraste */
  flex-shrink: 0; /* Empêche le footer de se rétrécir dans une structure Flexbox */
}

/* Contenu principal du footer */
.footer-content {
  text-align: left;
  margin-bottom: 20px;
}

.footer-content h2 {
  font-size: 1.6rem;
  font-weight: bold;
  color: #f1f1f1;
  margin-bottom: 15px;
}

/* Informations de contact */
.contact-info p {
  font-size: 1rem;
  margin: 10px 0;
  color: #ccc;
  line-height: 1.5;
}

/* Icônes de contact */
.icon {
  margin-right: 10px;
  font-size: 1.2rem;
  color: #ff6347; /* Couleur orange pour les icônes */
}

/* Lien d'email */
.email-link {
  color: #ff6347;
  text-decoration: underline;
  font-weight: bold;
}

.email-link:hover {
  color: darkblue;
  text-decoration: none;
}

/* Pied de page */
.footer-bottom {
  text-align: center;
  font-size: 0.9rem;
  color: #ccc;
  margin-top: 20px;
}

/* Responsiveness : Assurez-vous que tout est bien espacé sur les petits écrans */
@media (max-width: 600px) {
  .footer-container {
    padding: 30px 10px;
  }

  .footer-content h2 {
    font-size: 1.4rem;
  }

  .contact-info p {
    font-size: 0.9rem;
  }

  .footer-bottom {
    font-size: 0.8rem;
  }
}

html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}

footer {
  margin-top: auto; /* Cela pousse le footer vers le bas */
}
</style>
