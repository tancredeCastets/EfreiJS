<template>
  <div>
    <!-- Bandeau vert contenant le titre et le menu -->
    <div class="header-container" :class="{'hidden': isScrolled}">
      <h1 class="site-title">Bricolage Store</h1>
      <nav class="navbar">
        <ul class="nav-list">
          <li><router-link to="/" class="nav-item">Accueil</router-link></li>
          <li><router-link to="/panierAchat" class="nav-item">Panier</router-link></li>
          <li><router-link to="/more" class="nav-item">Commande</router-link></li>
          <li><router-link to="/login" class="nav-item">Connexion</router-link></li>
        </ul>
      </nav>
    </div>

    <!-- Barre noire fixe contenant le menu et l'icône du panier -->
    <div class="sticky-nav-bar" :class="{'visible': isScrolled}">
      <ul class="nav-list">
        <li><router-link to="/" class="nav-item">Accueil</router-link></li>
        <li><router-link to="/panierAchat" class="nav-item">Panier</router-link></li>
        <li><router-link to="/more" class="nav-item">Commande</router-link></li>
        <li><router-link to="/login" class="nav-item">Connexion</router-link></li>
      </ul>
      <!-- Icône du panier -->
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
/* Header contenant le titre (visible uniquement avant défilement) */
.header-container {
  background-color: #2f4f4f; 
  color: #f1f1f1; 
  padding: 10px 20px; 
  width: 100%; 
  position: fixed; 
  top: 0;
  left: 0;
  z-index: 1000;
  transition: opacity 0.3s ease-in-out, padding 0.3s ease-in-out; 
  display: flex;
  justify-content: center; 
  align-items: center;
  flex-direction: column; 
  box-sizing: border-box; 
  width: 100vw; 
  position: fixed; 
  top: 0;
}

/* Masquer le header lorsqu'on défile */
.header-container.hidden {
  opacity: 0;
  pointer-events: none;
  transform: translateY(-100%);
}

/* Barre noire fixe après défilement */
.sticky-nav-bar {
  background-color: #000;
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
  flex-direction: row;
  transition: opacity 0.3s ease;
}

/* Rendre la barre visible après défilement */
.sticky-nav-bar.visible {
  display: flex;
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

/* Icône du panier */
.panier-icon {
  position: fixed;
  top: 10px; 
  right: 20px;
  z-index: 1001;
  cursor: pointer;
  background-color: #FFFFFF; /* Blanc pur pour contraster avec le noir */
  color: #14e2c7; /* Icône en noir */
  padding: 10px;
  border-radius: 50%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* Ombre discrète */
  transition: background-color 0.3s ease, transform 0.2s ease;
}

/* Ajouter un effet de survol */
.panier-icon:hover {
  background-color: #E0E0E0; /* Gris clair survol */
  transform: scale(1.1); /* Légère mise en avant */
}

@media (max-width: 768px) {
  .nav-list {
    flex-direction: column;
    align-items: center;
  }
}
</style>