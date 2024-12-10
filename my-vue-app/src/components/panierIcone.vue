<template>
  <div class="panier-icon-container">
    <i class="fas fa-shopping-cart panier-icon"></i>
    <div class="panier-badge" v-if="panierCount > 0">{{ panierCount }}</div>
  </div>
</template>

<script>
import { store } from '../panier';  // ou vuex selon ton setup

export default {
  name: 'panierIcone',
  computed: {
    panierCount() {
      return store.cart.length;  // ou via mapState si tu utilises Vuex
    }
  }
};
</script>

<style scoped>
.panier-icon-container {
  position: relative;
  display: inline-block;
}

.panier-icon {
  font-size: 2rem;
  color: #333;
}

.panier-badge {
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: #ff6347; /* Orange */
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  text-align: center;
  font-size: 12px;
  line-height: 20px;
}
</style>
