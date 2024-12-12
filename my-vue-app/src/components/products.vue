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

    <!-- Notification -->
    <div v-if="showNotification" class="notification">
      {{ notificationMessage }}
    </div>
  </div>
</template>

<script>
import api from "../services/api";

export default {
  name: "ProductDetails",

  data() {
    return {
      product: null, // Stocker les détails du produit
      showNotification: false, // Pour afficher une notification temporaire
      notificationMessage: "", // Message de la notification
    };
  },

  async created() {
    const productId = this.$route.params.id; // Récupérer l'ID du produit depuis l'URL
    try {
      const response = await api.get(`/products/${productId}`);
      this.product = response.data; // Assigner le produit récupéré
    } catch (error) {
      console.error("Erreur lors du chargement des détails du produit", error);
    }
  },

  methods: {
    goBack() {
      this.$router.go(-1); // Revenir à la page précédente
    },

    addToCart(product) {
      // Charger le panier actuel depuis le localStorage
      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      // Vérifier si le produit est déjà dans le panier
      const existingProduct = cart.find(item => item.id === product.id);
      if (existingProduct) {
        // Si le produit existe, augmenter la quantité
        existingProduct.quantity += 1;
      } else {
        // Si le produit n'existe pas, l'ajouter avec une quantité de 1
        cart.push({ ...product, quantity: 1 });
      }

      // Sauvegarder le panier dans le localStorage
      localStorage.setItem("cart", JSON.stringify(cart));

      // Afficher une notification à l'utilisateur
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
  background-color: #007bff;
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 10px 15px;
  font-size: 16px;
  border: none;
  background: none;
  color: rgb(82, 24, 24);
  cursor: pointer;
  
}

.back-button:hover {
  color: #ffffff;
}

.notification {
  position: fixed;
  top: 120px;
  right: 20px;
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}
</style>
