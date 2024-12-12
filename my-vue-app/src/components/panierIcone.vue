<template>
  <div class="panier-icon-container">
    <i class="fas fa-shopping-cart panier-icon"></i>
    <div class="panier-badge" v-if="panierCount > 0">{{ panierCount }}</div>
  </div>
</template>

<script>
import { store } from '../panier';  
export default {
  name: 'panierIcone',
  computed: {
    panierCount() {
      return store.cart.length;  
    }
  },
  methods: {
    goToCart() {   
      this.$router.push('/panier');  
    }
  }
};
</script>

<style scoped>
.panier-icon-container {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.panier-icon {
  font-size: 2rem;
  color: white;  
  z-index: 10;   
}

.panier-badge {
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: #ff6347; 
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  text-align: center;
  font-size: 12px;
  line-height: 20px;
  z-index: 20; 
}
</style>
