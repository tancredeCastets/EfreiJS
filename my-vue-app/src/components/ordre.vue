<template>
  <div class="orders-page">
    <h2>Historique des Commandes</h2>
    <div v-if="orders.length === 0">
      <p>Aucune commande n'a été passée pour l'instant.</p>
    </div>
    <div v-else>
      <ul>
        <li v-for="order in orders" :key="order.id" class="order-item">
          <p><strong>Commande #{{ order.id }}</strong> - {{ order.date }}</p>
          <p><strong>Total : {{ order.total.toFixed(2) }} €</strong></p>
          <ul class="order-items">
            <li v-for="item in order.items" :key="item.id">
              {{ item.name }} - {{ item.quantity }} x {{ item.price.toFixed(2) }} €
            </li>
          </ul>
          <button @click="printOrder(order)">Imprimer Bon de Livraison</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrdersPage",
  data() {
    return {
      // Charger les commandes depuis le localStorage
      orders: JSON.parse(localStorage.getItem("orders")) || [],
    };
  },
  methods: {
    printOrder(order) {
      // Format du bon de livraison
      const printable = `
        BON DE LIVRAISON
        ------------------
        Commande #${order.id}
        Date : ${order.date}
        
        Articles :
        ${order.items
          .map(item => `- ${item.name} : ${item.quantity} x ${item.price.toFixed(2)}€`)
          .join("\n")}

        ------------------
        Total : ${order.total.toFixed(2)}€
        
        Merci pour votre commande !
      `;
      // Crée une nouvelle fenêtre pour l'impression
      const newWindow = window.open("", "_blank");
      newWindow.document.write(`<pre>${printable}</pre>`);
      newWindow.document.close();
      newWindow.print();
      newWindow.close();
    },
  },
};
</script>

<style scoped>
.orders-page {
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

.order-item {
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 15px;
  background-color: #fff;
}

.order-items {
  margin-top: 10px;
  padding-left: 15px;
  color: #555;
}

button {
  margin-top: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
