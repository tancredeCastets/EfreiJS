<template>
  <div class="footer-container">
    <h1>Footer</h1>
    <h2>Contact</h2>
    <div class="contact-info">
      <p>Adresse : 123 Rue des Outils, 75000 Paris</p>
      <p>Téléphone : +33 1 23 45 67 89</p>
      <p>
        Email : 
        <a href="mailto:contact@bricolage-store.com" class="email-link">
          contact@bricolage-store.com
        </a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'monFooter',
};
</script>

<style scoped>
.footer-container {
  text-align: center;
  padding: 20px;
  background-color: rgb(152, 152, 219);
  color: brown;
  margin-top: 10px;
  border-top: 2px solid brown;
}

.contact-info {
  font-size: 0.8rem; /* Texte plus petit pour les coordonnées */
  color: darkgray;
  margin-top: 10px;
}

.email-link {
  color: blue;
  text-decoration: underline;
  font-weight: bold;
}

.email-link:hover {
  color: darkblue;
  text-decoration: none;
}
</style>
