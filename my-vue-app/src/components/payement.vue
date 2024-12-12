<template>
  <div class="payement-page">
    <h2>Validation de votre commande</h2>
    <ul>
      <li v-for="item in cart" :key="item.id">
        <p>{{ item.name }} - {{ item.quantity }} x {{ item.price.toFixed(2) }} €</p>
      </li>
    </ul>
    <p><strong>Total : {{ total.toFixed(2) }} €</strong></p>
    <button @click="confirmPayment">Confirmer et Payer</button>
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
      this.$router.push("/orders"); // Rediriger vers la page des commandes
    },
  },
};
</script>

<style scoped>
.payment {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
</style>
