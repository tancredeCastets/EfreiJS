<template>
  <monheader></monheader>
  
  <router-view />
  <monfooter></monfooter>
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
  margin-top: 60px; 
  padding-top: 80px; 
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
  width: 100vw;
  height: 120px; 
  padding-top: 20px; 
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
  margin: 0 20px; 
  position: relative;
}

.nav-list li a {
  text-decoration: none; 
  color: #fff; 
  font-size: 18px; 
  font-weight: 500; 
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
</style>
