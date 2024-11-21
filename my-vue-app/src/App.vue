<template>
  <monheader>
  </monheader>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/more">More</router-link></li>
      <li><router-Link to="/hello">Hello</router-Link></li>
      <li><router-Link to="/login">connexion</router-Link></li>
      <li><router-Link to="/store">acheter</router-Link></li>
    </ul>
  </nav>
  <router-view />
  <img alt="Vue logo" src="./assets/logo.png">*
  
<monfooter></monfooter>
</template>

<script>
import monheader from './components/header.vue'
import monfooter from './components/footer.vue'
//import HelloWorld from './components/HelloWorld.vue';


export default {
  name: 'App',
  components: {
    monheader,
  //  HelloWorld,
    monfooter,
    
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
  background-color: #f8f9fa; /* Couleur de fond (optionnel) */
  padding: 10px;
}

/* Alignement horizontal des éléments */
.nav-list {
  display: flex; /* Dispose les éléments en ligne */
  justify-content: center; /* Centrer les éléments (optionnel) */
  list-style-type: none; /* Supprime les puces des <li> */
  padding: 0;
  margin: 0;
}

/* Style des éléments de la liste */
.nav-list li {
  margin: 0 15px; /* Espacement entre les liens */
}

/* Style des liens */
.nav-list li a {
  text-decoration: none; /* Supprime le soulignement */
  color: #333; /* Couleur du texte */
  font-size: 16px; /* Taille du texte */
  transition: color 0.3s ease; /* Animation pour le hover */
}

/* Changer la couleur au survol */
.nav-list li a:hover {
  color: #007bff; /* Couleur au survol */
}
</style>

