<template>
  <div class="container">
    <h1 class="my-comp">Bienvenue sur notre site de matériel de bricolage</h1>

    <div class="filters">
      <label for="category">Catégorie :</label>
      <select id="category" v-model="selectedCategory">
        <option value="">Toutes les catégories</option>
        <option value="Outils de base">Outils de base</option>
        <option value="Matériaux de construction">Matériaux de construction</option>
        <option value="Équipements de protection">Équipements de protection</option>
      </select>

      <label for="minPrice">Prix minimum :</label>
      <input
        type="number"
        id="minPrice"
        v-model.number="minPrice"
        placeholder="Prix minimum"
      />

      <label for="maxPrice">Prix maximum :</label>
      <input
        type="number"
        id="maxPrice"
        v-model.number="maxPrice"
        placeholder="Prix maximum"
      />
    </div>
  
    <div class="categories-container">     
      <div class="category-card" v-if="filteredTools.length > 0">
        <h2>Outils de base</h2>
        <div class="product-list">
          <div
            class="product-card"
            v-for="(product, index) in filteredTools"
            :key="index"
          >         
            <router-link
              :to="`/product/${product.id}`"
              class="product-link"
            >
              <h3>{{ product.name }}</h3>
              <p>{{ product.description }}</p>
              <p class="price">{{ product.price.toFixed(2) }} €</p>
            </router-link>
          </div>
        </div>
      </div>
     
      <div class="category-card" v-if="filteredMaterials.length > 0">
        <h2>Matériaux de construction</h2>
        <div class="product-list">
          <div
            class="product-card"
            v-for="(product, index) in filteredMaterials"
            :key="index"
          >
            
            <router-link
              :to="`/product/${product.id}`"
              class="product-link"
            >
              <h3>{{ product.name }}</h3>
              <p>{{ product.description }}</p>
              <p class="price">{{ product.price.toFixed(2) }} €</p>
            </router-link>
          </div>
        </div>
      </div>

      <div class="category-card" v-if="filteredProtection.length > 0">
        <h2>Équipements de protection</h2>
        <div class="product-list">
          <div
            class="product-card"
            v-for="(product, index) in filteredProtection"
            :key="index"
          >
            <router-link
              :to="`/product/${product.id}`"
              class="product-link"
            >
              <h3>{{ product.name }}</h3>
              <p>{{ product.description }}</p>
              <p class="price">{{ product.price.toFixed(2) }} €</p>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../services/api"; 

export default {
  name: "HelloWorld",

  data() {
    return {
      tools: [],
      materials: [],
      protection: [],
      selectedCategory: "", 
      minPrice: null, 
      maxPrice: null, 
    };
  },

  async created() {
    try {
      const response = await api.get("/products");
      const products = response.data;

      this.tools = products.filter(
        (product) => product.category === "Outils de base"
      );
      this.materials = products.filter(
        (product) => product.category === "Matériaux de construction"
      );
      this.protection = products.filter(
        (product) => product.category === "Équipements de protection"
      );
    } catch (error) {
      console.error("Erreur lors du chargement des produits :", error);
    }
  },

  computed: {
    // Filtrer les outils en fonction des filtres sélectionnés
    filteredTools() {
      return this.applyFilters(this.tools);
    },
    // Filtrer les matériaux en fonction des filtres sélectionnés
    filteredMaterials() {
      return this.applyFilters(this.materials);
    },
    // Filtrer les équipements de protection en fonction des filtres sélectionnés
    filteredProtection() {
      return this.applyFilters(this.protection);
    },
  },

  methods: {
    // Méthode générique pour appliquer les filtres
    applyFilters(products) {
      return products.filter((product) => {
        const matchesCategory =
          !this.selectedCategory || product.category === this.selectedCategory;
        const matchesMinPrice =
          this.minPrice === null || product.price >= this.minPrice;
        const matchesMaxPrice =
          this.maxPrice === null || product.price <= this.maxPrice;

        return matchesCategory && matchesMinPrice && matchesMaxPrice;
      });
    },
  },
};
</script>

<style scoped>
.filters {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
}

.filters label {
  font-weight: bold;
}

.filters select,
.filters input {
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.filters input {
  width: 150px;
}

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
  width: 50%;
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

/* Style pour le lien cliquable */
.product-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.product-link:hover {
  background-color: #f0f0f0;
  border-radius: 5px;
}
</style>
