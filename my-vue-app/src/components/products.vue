<template>
  <div class="product-details">
    <button @click="goBack" class="back-button">Retour</button>

    <h1>{{ product?.name }}</h1>
    <img 
      v-if="product?.imagePath" 
      :src="`/assets/${product.imagePath}`" 
      :alt="product.name" 
      class="product-image" 
    />
    <p v-if="product"><strong>Description:</strong> {{ product.description }}</p>
    <p v-if="product"><strong>Prix:</strong> {{ product.price.toFixed(2) }} €</p>
    <p v-if="product"><strong>Catégorie:</strong> {{ product.category }}</p>

    <!-- Bouton Ajouter au panier -->
    <button @click="addToCart(product)">Ajouter au panier</button>
  </div>
</template>

<script>
import { store } from "../panier"; // Importer le store pour gérer le panier
import api from "../services/api"; // Requête API pour récupérer les détails du produit

export default {
  name: "ProductDetails",

  data() {
    return {
      product: null, // Stocker les détails du produit
    };
  },

  async created() {
    const productId = this.$route.params.id; // Récupérer l'ID du produit depuis l'URL
    try {
      const response = await api.get(`/products/${productId}`);
      this.product = response.data; // Assigner le produit récupéré au store
    } catch (error) {
      console.error("Erreur lors du chargement des détails du produit", error);
    }
  },

  methods: {
    goBack() {
      this.$router.go(-1); // Revenir à la page précédente
    },

    addToCart(product) {
      store.addToCart(product); // Ajouter le produit au panier
      this.notificationMessage = `${product.name} a été ajouté au panier !`;
      this.showNotification = true;

      // Masquer la notification après 3 secondes
      setTimeout(() => {
        this.showNotification = false;
      }, 3000);
    },
  },
};
</script>

<style scoped>
.product-details {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: relative;
}

.product-details h1 {
  font-size: 2em;
  margin-bottom: 20px;
  color: #333;
}

.product-details p {
  font-size: 1.2em;
  margin-bottom: 15px;
}

.product-image {
  display: block;
  max-width: 100%;
  height: auto;
  margin: 20px 0;
  border-radius: 8px;
}

button {
  background-color: #ff6347;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #e5533d;
}

.back-button {
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 10px 15px;
  font-size: 16px;
  border: none;
  background: none;
  color: #007bff;
  cursor: pointer;
  text-decoration: underline;
}

.back-button:hover {
  color: #0056b3;
}
</style>
