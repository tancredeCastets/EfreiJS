<template>
  <div>
    <div class="header-container" :class="{'hidden': isScrolled}">
      <h1 class="site-title">Bricole&Co</h1>
      <nav class="navbar">
        <ul class="nav-list">
          <li><router-link to="/" class="nav-item">Accueil</router-link></li>
          <li><router-link to="/panierAchat" class="nav-item">Panier</router-link></li>
          <li><router-link to="/ordre" class="nav-item">Commande</router-link></li>
          <li><router-link to="/login" class="nav-item">Connexion</router-link></li>  
        </ul>
        <panierIcone class="panier-icon"></panierIcone>
      </nav>
    </div>

    <div class="sticky-nav-bar" :class="{'visible': isScrolled}">
      <ul class="nav-list">
        <li><router-link to="/" class="nav-item">Accueil</router-link></li>
        <li><router-link to="/panierAchat" class="nav-item">Panier</router-link></li>
        <li><router-link to="/more" class="nav-item">Commande</router-link></li>
        <li><router-link to="/login" class="nav-item">Connexion</router-link></li>
      </ul>
      <panierIcone class="panier-icon"></panierIcone>
    </div>
  </div>
</template>

<script>
export default {
  name: 'monHeader',
  data() {
    return {
      isScrolled: false, // Indique si la page est scrollée
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll); // Écoute du défilement
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll); // Suppression de l'écoute
  },
  methods: {
    handleScroll() {
      // Détecter si on a défilé plus de 100px
      this.isScrolled = window.scrollY > 100;
    },
  },
};
</script>

<style scoped>
/* Header contenant le titre et l'image de fond */
.header-container {
  background-image: url('@/assets/fonds-aplication.png'); 
  background-size: cover; 
  background-position: center; 
  background-attachment: fixed; 
  color: #f1f1f1; 
  padding: 80px 20px; 
  text-align: center;
  width: 100%; 
  position: fixed; 
  top: 0;
  left: 0;
  z-index: 1000;
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}

/* Masquer progressivement le header */
.header-container.hidden {
  opacity: 0;
  pointer-events: none;
  transform: translateY(-50%);
}

/* Sticky nav-bar visible après scroll */
.sticky-nav-bar {
  background-color: rgba(0, 0, 0, 0.9); 
  color: #f1f1f1;
  padding: 10px 20px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: none;
  z-index: 1000;
  align-items: center;
  justify-content: space-between;
  transition: opacity 0.3s ease-in-out;
}

.sticky-nav-bar.visible {
  display: flex;
  opacity: 1;
}

/* Liste de navigation */
.nav-list {
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;
  flex: 1;
  justify-content: center;
}

/* Élément de navigation */
.nav-item {
  text-decoration: none;
  color: #f1f1f1;
  font-size: 1.1rem;
  padding: 10px 15px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.nav-item:hover {
  background-color: #ff6347;
  color: white;
}
/* Style du titre avec un fond brouillé */
.site-title {
  font-size: 3rem; 
  color: #ffffff; 
  padding: 10px 20px;
  text-align: center;
  position: relative;
  z-index: 10;
}

/* Fond brouillé derrière le titre */
.site-title::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backdrop-filter: blur(8px); 
  background-color: rgba(0, 0, 0, 0.4); 
  border-radius: 8px; 
  z-index: -1; 
}


/* Icône du panier */
.panier-icon {
  position: fixed;
  top: 10px; 
  right: 20px;
  z-index: 1001;
  cursor: pointer;
  background-color: #FFFFFF; 
  color: #14e2c7; 
  padding: 10px;
  border-radius: 50%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); 
  transition: background-color 0.3s ease, transform 0.2s ease;
}

/* Ajouter un effet de survol */
.panier-icon:hover {
  background-color: #E0E0E0; 
  transform: scale(1.1); 
}

@media (max-width: 768px) {
  .nav-list {
    flex-direction: column;
    align-items: center;
  }
}
</style>