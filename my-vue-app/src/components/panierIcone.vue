<template>
  <div class="panier-icone-container">
    <i class="fas fa-shopping-panier panier-icon"></i>
    
    <!-- Badge qui affiche le nombre d'articles -->
    <div class="panier-badge" v-if="panierCount > 0">{{ panierCount }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'panierIcone',
  computed: {
    ...mapState(['panier']), // Récupérer l'état du panier depuis Vuex
    panierCount() {
      return this.panier.length; // Nombre d'articles dans le panier
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
