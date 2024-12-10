<template>
  <monheader></monheader>
  <panierIcone></panierIcone>
  <router-view />
  <monfooter></monfooter>
</template>

<script>
import panierIcone from './components/panierIcone.vue'; 
import '@fortawesome/fontawesome-free/css/all.css';
import monheader from './components/header.vue'
import monfooter from './components/footer.vue'


export default {
  name: 'App',
  components: {
    monheader,
    monfooter,
    panierIcone,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/* Style de la barre de navigation */
.navbar {
  background-color: #333; /* Couleur de fond du menu (foncé pour un contraste plus net) */
  padding: 15px 20px; /* Un peu de padding autour du menu */
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000; /* Pour que le menu reste au-dessus du contenu */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Ombre discrète sous le menu */
}

/* Liste horizontale avec centrage */
.nav-list {
  display: flex; /* Alignement horizontal */
  justify-content: center; /* Centrage horizontal */
  list-style-type: none; /* Supprime les puces des éléments */
  padding: 0;
  margin: 0;
}

/* Style des éléments de la liste */
.nav-list li {
  margin: 0 20px; /* Espacement plus large entre les liens */
  position: relative;
}

/* Style des liens */
.nav-list li a {
  text-decoration: none; /* Supprime le soulignement */
  color: #fff; /* Couleur du texte (blanc) */
  font-size: 18px; /* Augmente la taille du texte */
  font-weight: 500; /* Légèrement gras pour améliorer la lisibilité */
  padding: 10px 15px; /* Un peu de padding autour du texte pour améliorer l'ergonomie */
  border-radius: 5px; /* Bords arrondis pour les liens */
  transition: background-color 0.3s ease, color 0.3s ease; /* Animation pour les effets de survol */
}

/* Style des liens au survol */
.nav-list li a:hover {
  background-color: #007bff; /* Fond bleu au survol */
  color: #fff; /* Garde la couleur blanche au survol */
}

/* Petit effet lorsque l'on clique sur un lien (active) */
.nav-list li a:active {
  transform: scale(0.98); /* Réduit légèrement la taille pour l'effet de pression */
}
</style>
