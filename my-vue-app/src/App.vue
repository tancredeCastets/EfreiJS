<template>
  <monheader></monheader>
  <img alt="Vue logo" src="./assets/logo.png">*
  <Affiche></Affiche>
  <monfooter></monfooter>
</template>

<script>
import monheader from './components/header.vue'
import monfooter from './components/footer.vue'
import Affiche from './components/affiche.vue';
//import HelloWorld from './components/HelloWorld.vue';


export default {
  name: 'App',
  components: {
    monheader,
  //  HelloWorld,
    monfooter,
    Affiche,
    
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
</style>

