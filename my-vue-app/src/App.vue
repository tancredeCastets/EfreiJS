<template>
  <div id="app">
    <monheader></monheader>
    <div class="main-content">
      <router-view />
    </div>
    <monfooter></monfooter>
  </div>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css';
import monheader from './components/header.vue'
import monfooter from './components/footer.vue'

export default {
  name: 'App',
  components: {
    monheader,
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
  display: flex;
  flex-direction: column;
  height: 100vh; /* Prendre toute la hauteur */
  margin: 0;
}

.main-content {
  flex: 1; /* Prendre l'espace restant */
  padding-top: 160px; /* Crée un espace pour le header */
}

.header-container {
  background-color: #2f4f4f;
  color: #f1f1f1;
  padding: 10px 20px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  height: 120px;
  padding-top: 20px;
  width: 100vw;
}

.navbar {
  background-color: #333;
  padding: 15px 20px;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.nav-list {
  display: flex;
  justify-content: center;
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.nav-list li {
  margin: 0 50px;
}

.nav-list li a {
  text-decoration: none;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  padding: 10px 15px;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.nav-list li a:hover {
  background-color: #007bff;
  color: #fff;
}

.nav-list li a:active {
  transform: scale(0.98);
}

/* Footer */
footer {
  background-color: #2f4f4f;
  color: #f1f1f1;
  text-align: center;
  padding: 10px 0; /* Réduction de la hauteur */
  border-top: 2px solid #ff6347;
  flex-shrink: 0;
  margin-top: auto;
  width: 100%;
}

footer p {
  font-size: 0.9rem;
  color: #ccc;
  margin: 5px 0;
}

/* Réduction de la largeur qui cause le scroll horizontal */
body, html {
  overflow-x: hidden;
  margin: 0;
  padding: 0;
}

</style>
