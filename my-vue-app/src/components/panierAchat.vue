<template>
    <div class="Panier-Achat">
      <h2>Votre Panier</h2>
  
      <div v-if="cart.length === 0">
        <p>Votre panier est vide.</p>
      </div>
  
      <div v-else>
        <ul>
          <li v-for="item in cart" :key="item.id">
            <p>{{ item.name }} - {{ item.quantity }} x {{ item.price.toFixed(2) }} €</p>
            <button @click="removeFromCart(item.id)">Retirer</button>
          </li>
        </ul>
        <p><strong>Total : {{ total.toFixed(2) }} €</strong></p>
        <button @click="clearCart">Vider le panier</button>
      </div>
    </div>
  </template>
  
  <script>
  import { store } from "../panier"; // Importer le store
  
  export default {
    name: "PanierAchat",
  
    computed: {
      // Obtenir les produits du panier depuis le store
      cart() {
        return store.cart;
      },
  
      // Calculer le total du panier
      total() {
        return store.getTotal();
      },
    },
  
    methods: {
      // Retirer un produit du panier
      removeFromCart(productId) {
        store.removeFromCart(productId);
      },
  
      // Vider le panier
      clearCart() {
        store.clearCart();
      },
    },
  };
  </script>
  
  <style scoped>
  .panier {
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    font-size: 2em;
    color: #333;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
  }
  
  button {
    background-color: #ff6347;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #e5533d;
  }
  </style>
  