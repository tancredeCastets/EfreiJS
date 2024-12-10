<template>
  <div>
    <!-- Bandeau vert qui contient le titre et le menu -->
    <div class="header-container" :class="{'scrolled': isScrolled}">
      <h1 class="site-title" :class="{'hidden': isScrolled}">Bricolage Store</h1>
      <nav class="navbar">
        <ul class="nav-list">
          <li><router-link to="/" class="nav-item">Accueil</router-link></li>
          <li><router-link to="/panierAchat" class="nav-item">Panier</router-link></li>
          <li><router-link to="/more" class="nav-item">Commande</router-link></li>
          <li><router-link to="/login" class="nav-item">Connexion</router-link></li>
        </ul>
      </nav>
    </div>

    <!-- Barre de navigation noire qui devient fixe après le défilement -->
    <div class="sticky-nav-bar" :class="{'visible': isScrolled}">
      <ul class="nav-list">
        <li><router-link to="/" class="nav-item">Accueil</router-link></li>
        <li><router-link to="/store" class="nav-item">Panier</router-link></li>
        <li><router-link to="/more" class="nav-item">Commande</router-link></li>
        <li><router-link to="/login" class="nav-item">Connexion</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'monHeader',
  data() {
    return {
      isScrolled: false, // Variable pour savoir si on a défilé ou non
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll); // Écouter l'événement de défilement
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll); // Supprimer l'écouteur de défilement
  },
  methods: {
    handleScroll() {
      // Si la page est défilée plus de 100px, cacher le bandeau vert, sinon l'afficher
      this.isScrolled = window.scrollY > 100;
    },
  },
};
</script>

<style scoped>
/* Conteneur principal du header */
.header-container {
  background-color: #2f4f4f; /* Gris-bleu pour l'aspect robuste */
  color: #f1f1f1; /* Texte clair pour le contraste */
  padding: 10px 20px; /* Réduire l'espace vertical */
  width: 100%; /* Prend toute la largeur */
  position: fixed; /* Fixe le header en haut de la page */
  top: 0;
  left: 0;
  z-index: 1000;
  transition: opacity 0.3s ease-in-out, padding 0.3s ease-in-out; /* Transition pour le padding et l'opacité */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box; /* Inclure les bordures et padding dans les dimensions */
  width: 100vw; /* Utiliser 100% de la largeur de la fenêtre pour éviter les débordements */
}

/* Effet de défilement : cacher le bandeau vert */
.header-container.scrolled {
  opacity: 0;
  pointer-events: none; /* Empêche les clics lorsque le bandeau est caché */
  padding-top: 0; /* Réduit l'espace quand on a défilé */
}

/* Titre du site */
.site-title {
  font-size: 2.5rem; /* Taille réduite du titre */
  font-weight: bold;
  color: #f1f1f1;
  margin: 0;
  margin-bottom: 10px; /* Espacement entre le titre et le menu */
  transition: opacity 0.3s ease-in-out; /* Transition pour l'opacité */
  text-align: center;
}

/* Cacher le titre lorsqu'on a défilé */
.site-title.hidden {
  opacity: 0;
}

/* Barre de navigation avec menu */
.navbar {
  display: flex;
  justify-content: center;
  width: 100%;
}

/* Liste de navigation */
.nav-list {
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;
  width: 100%;
  justify-content: center;
  text-align: center;
  box-sizing: border-box;
}

/* Élément de la navigation */
.nav-item {
  text-decoration: none;
  color: #f1f1f1;
  font-size: 1.1rem;
  padding: 10px 15px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  flex-grow: 1; /* Pour que les éléments se répartissent également */
}

/* Changement de couleur au survol */
.nav-item:hover {
  background-color: #ff6347; /* Couleur d'accent sur hover (orange) */
  color: white;
}

/* Style de la barre de navigation noire qui reste en haut après défilement */
.sticky-nav-bar {
  background-color: #000;  /* Noir */
  padding: 10px 0;
  position: fixed;
  top: 0; /* Positionne la barre en haut de la page après le défilement */
  left: 0;
  width: 100%;
  display: none; /* Masqué par défaut */
  z-index: 1000; /* Assurez-vous que cette barre reste au-dessus des autres contenus */
  transition: top 0.3s ease; /* Pour l'animation fluide */
}

/* Affichage de la barre noire après défilement */
.sticky-nav-bar.visible {
  display: block;
}

/* Responsivité : adapté aux petits écrans */
@media (max-width: 768px) {
  .header-container {
    padding: 10px 10px; /* Moins de padding sur mobile */
  }

  .site-title {
    font-size: 2rem; /* Réduit la taille du titre sur petits écrans */
    margin-bottom: 5px;
  }

  .navbar {
    width: 100%;
    justify-content: center;
    margin-top: 10px;
  }

  .nav-list {
    flex-direction: column;
    width: 100%;
  }

  .nav-item {
    margin-left: 0;
    margin-bottom: 10px;
    padding: 10px;
    font-size: 1rem;
  }
}
</style>
