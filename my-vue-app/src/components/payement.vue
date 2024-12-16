<template>
  <div class="payement-page">
    <h2>Validation de votre commande</h2>
    <ul>
      <li v-for="item in cart" :key="item.id">
        <p>{{ item.name }} - {{ item.quantity }} x {{ item.price.toFixed(2) }} €</p>
      </li>
    </ul>
    <p><strong>Total : {{ total.toFixed(2) }} €</strong></p>

    <!-- Conteneur des boutons -->
    <div class="button-container">
      <!-- Annuler -->
      <button @click="cancelPayment" class="cancel-button">Annuler</button>

      <!-- Payer -->
      <button @click="confirmPayment" class="pay-button">Confirmer et Payer</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PayementPage",
  data() {
    return {
      cart: JSON.parse(localStorage.getItem("cart")) || [], // Récupération du panier depuis localStorage
    };
  },
  computed: {
    total() {
      return this.cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
    },
  },
  methods: {
    confirmPayment() {
      // Création d'une commande avec les informations nécessaires
      const order = {
        id: Date.now(), // ID unique basé sur la date
        date: new Date().toLocaleString(),
        items: this.cart,
        total: this.total,
      };

      // Récupérer les commandes existantes dans localStorage
      let orders = JSON.parse(localStorage.getItem("orders")) || [];
      orders.push(order);

      // Sauvegarder la commande mise à jour
      localStorage.setItem("orders", JSON.stringify(orders));

      // Vider le panier
      localStorage.removeItem("cart");

      alert("Commande confirmée ! Merci pour votre achat.");
      this.$router.push("/ordre"); // Rediriger vers la page des commandes
    },

    cancelPayment() {
      // Rediriger vers la page du panier
      this.$router.push("/panierAchat");
    },
  },
};
</script>

<style scoped>
.payment-page {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 200px; /* Limiter la largeur */
  margin: 0 10px; /* Espacement entre les boutons */
}

.button-container {
  display: flex;
  justify-content: center;
  gap: 20px; /* Espace entre les boutons */
  margin-top: 20px;
}

.pay-button {
  background-color: #ff6347;
  color: white;
}

.pay-button:hover {
  background-color: #e5533d;
}

.cancel-button {
  background-color: #cccccc;
  color: white;
}

.cancel-button:hover {
  background-color: #b0b0b0;
}
</style>
