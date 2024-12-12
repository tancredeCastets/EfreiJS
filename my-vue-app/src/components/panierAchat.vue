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
      <button @click="redirectToPayment">Payer</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PanierAchat",
  data() {
    return {
      cart: JSON.parse(localStorage.getItem("cart")) || [], // Initialisation à partir de localStorage
    };
  },
  computed: {
    total() {
      return this.cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
    },
  },
  methods: {
    removeFromCart(productId) {
      this.cart = this.cart.filter((item) => item.id !== productId);
      this.saveCartToLocalStorage();
    },
    clearCart() {
      this.cart = [];
      this.saveCartToLocalStorage();
    },
    saveCartToLocalStorage() {
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
    redirectToPayment() {
      this.$router.push("/payement");
    },
  },
  watch: {
    cart: {
      handler() {
        this.saveCartToLocalStorage();
      },
      deep: true,
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
  