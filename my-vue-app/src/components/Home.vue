<template>
  <div class="container">
    <h1 class="my-comp">Bienvenue sur notre site de matériel de bricolage</h1>

    <div class="categories-container">
      <!-- Catégorie Outils de base -->
      <div class="category-card">
        <h2>Outils de base</h2>
        <div class="product-list">
          <div class="product-card" v-for="(product, index) in tools" :key="index">
            <h3>{{ product.name }}</h3>
            <p>{{ product.description }}</p>
            <p class="price">${{ product.price.toFixed(2) }}</p>
          </div>
        </div>
      </div>

      <!-- Catégorie Matériaux de construction -->
      <div class="category-card">
        <h2>Matériaux de construction</h2>
        <div class="product-list">
          <div class="product-card" v-for="(product, index) in materials" :key="index">
            <h3>{{ product.name }}</h3>
            <p>{{ product.description }}</p>
            <p class="price">${{ product.price.toFixed(2) }}</p>
          </div>
        </div>
      </div>

      <!-- Catégorie Équipements de protection -->
      <div class="category-card">
        <h2>Équipements de protection</h2>
        <div class="product-list">
          <div class="product-card" v-for="(product, index) in protection" :key="index">
            <h3>{{ product.name }}</h3>
            <p>{{ product.description }}</p>
            <p class="price">${{ product.price.toFixed(2) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',

  data() {
    return {
      // Catégorie Outils de base
      tools: [
        { name: 'Marteau multifonction', description: 'Marteau pour clouage et démolition.', price: 15.99 },
        { name: 'Perceuse-visseuse électrique', description: 'Rechargeable avec embouts multiples.', price: 45.50 },
        { name: 'Tournevis à cliquet', description: 'Kit avec différentes têtes.', price: 22.99 },
        { name: 'Scie à main universelle', description: 'Scie pour bois, plastique et autres matériaux.', price: 12.75 },
        { name: 'Mètre ruban', description: 'Mètre ruban 5m avec verrouillage.', price: 7.99 }
      ],

      // Catégorie Matériaux de construction
      materials: [
        { name: 'Ciment en sac', description: 'Ciment pour travaux de maçonnerie.', price: 5.99 },
        { name: 'Briques creuses', description: 'Pour murs porteurs ou cloisons.', price: 1.50 },
        { name: 'Plaques de plâtre', description: 'Plaques pour cloisons sèches.', price: 8.25 },
        { name: 'Tuiles en terre cuite', description: 'Pour toiture et décoration.', price: 2.10 },
        { name: 'Sable à maçonner', description: 'Sable pour béton et mortier.', price: 4.80 }
      ],

      // Catégorie Équipements de protection
      protection: [
        { name: 'Casque de sécurité', description: 'Casque anti-chocs, ajustable.', price: 18.99 },
        { name: 'Gants anti-coupure', description: 'Gants résistants pour manipulation.', price: 9.99 },
        { name: 'Lunettes de protection', description: 'Lunettes contre éclats et poussières.', price: 7.50 },
        { name: 'Chaussures de sécurité', description: 'Chaussures avec embout renforcé.', price: 25.00 },
        { name: 'Masques respiratoires FFP2', description: 'Masques contre poussière et particules.', price: 3.75 }
      ]
    };
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.my-comp {
  font-size: 2.5em;
  font-family: Arial, sans-serif;
  color: purple;
  margin-bottom: 30px;
}

.categories-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
}

.category-card {
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  margin: 15px;
  width: 30%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.category-card h2 {
  font-size: 1.8em;
  margin-bottom: 15px;
  text-align: center;
}

.product-list {
  display: flex;
  flex-direction: column;
}

.product-card {
  margin-bottom: 15px;
  padding: 10px;
  border-bottom: 1px solid #eee;
}

.product-card h3 {
  font-size: 1.4em;
  margin: 0;
}

.product-card p {
  font-size: 1em;
  color: #666;
}

.price {
  font-weight: bold;
  color: green;
}

@media (max-width: 768px) {
  .category-card {
    width: 100%;
    margin-bottom: 20px;
  }
}
</style>
