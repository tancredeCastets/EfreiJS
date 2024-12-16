<template>
  <div class="product-details">
    <button @click="goBack" class="back-button">Retour</button>

    <h1>{{ product?.name }}</h1>

    <p v-if="product"><strong>Description:</strong> {{ product.description }}</p>
    <p v-if="product"><strong>Prix:</strong> {{ product.price.toFixed(2) }} €</p>
    <p v-if="product"><strong>Catégorie:</strong> {{ product.category }}</p>

    <button @click="addToCart(product)" class="add-to-cart">Ajouter au panier</button>

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
      product: null,
      showNotification: false,
      notificationMessage: "",
    };
  },

  async created() {
    const productId = this.$route.params.id;
    try {
      const response = await api.get(`/products/${productId}`);
      this.product = response.data;
    } catch (error) {
      console.error("Erreur lors du chargement des détails du produit", error);
    }
  },

  methods: {
    goBack() {
      this.$router.go(-1);
    },

    addToCart(product) {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      const existingProduct = cart.find(item => item.id === product.id);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        cart.push({ ...product, quantity: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(cart));
      this.notificationMessage = `${product.name} a été ajouté au panier !`;
      this.showNotification = true;

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
  text-align: center;
}

.back-button {
  background-color: white;
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 10px 15px;
  font-size: 16px;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.back-button:hover {
  background-color: #ff6347;
  color: white;
}

.add-to-cart {
  background-color: #ff6347;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: block;
  margin: 20px auto;
}

.add-to-cart:hover {
  background-color: #e5533d;
}

.notification {
  position: fixed;
  top: 175px;
  right: 20px;
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}
</style>
