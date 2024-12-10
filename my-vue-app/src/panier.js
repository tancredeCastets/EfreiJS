// src/store.js
import { reactive } from 'vue';

export const store = reactive({
  cart: [],

  addToCart(product) {
    const existingProduct = this.cart.find(item => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1; // Si déjà dans le panier, on incrémente la quantité
    } else {
      this.cart.push({ ...product, quantity: 1 }); // Sinon, on ajoute le produit
    }
  },

  removeFromCart(productId) {
    const product = this.cart.find(item => item.id === productId);
    if (product && product.quantity > 1) {
      product.quantity -= 1; // Si plus d'une unité, on retire juste une unité
    } else {
      this.cart = this.cart.filter(item => item.id !== productId); // Si une seule unité, on retire le produit
    }
  },

  clearCart() {
    this.cart = [];
  },

  getTotal() {
    return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
  },
});
