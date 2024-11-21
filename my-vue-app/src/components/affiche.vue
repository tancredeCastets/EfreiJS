<template>
    <div>
      <h1>Items from Backend:</h1>
      <ul>
        <li v-for="item in items" :key="item.id">{{ item.name }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        items: []
      };
    },
    async created() {
      try {
        const response = await axios.get('http://localhost:3000/api/items');
        this.items = response.data;
      } catch (error) {
        console.error(error);
      }
    }
  }
  </script>
  