<template>
  <div class="footer-container">
    <div class="footer-content">
      <h2>Contactez-nous</h2>
      <div class="contact-info">
        <p>
          <span class="icon">📍</span>
          <strong>Adresse : </strong> 123 Rue des Outils, 33500 Libourne
        </p>
        <p>
          <span class="icon">📞</span>
          <strong>Téléphone : </strong> +33 1 23 45 67 89
        </p>
        <p>
          <span class="icon">✉️</span>
          <strong>Email : </strong>
          <a href="mailto:contact@Bricole&Co.com" class="email-link">
            contact@Bricole&Co.com
          </a>
        </p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2024 Bricole&Co - Tous droits réservés</p>
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
  background-image: url("../assets/fonds-aplication.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #f1f1f1;
  padding: 20px 10px;
  width: 100%;
  border-top: 1px solid #f76c47;
  font-size: 0.8rem;
  position: relative;
}

.footer-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  z-index: 1;
}

.footer-content,
.footer-bottom {
  position: relative;
  z-index: 10;
  padding: 0px 20px;
}

.footer-content h2,
.contact-info p,
.footer-bottom p {
  font-size: 1.2rem;
  text-align: center;
  margin: 10px 0;
  color: #ffffff;
  font-weight: bold;
}

.contact-info {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
}

.icon {
  margin-right: 5px;
  font-size: 1.5rem;
  color: #f76c47;
}

.email-link {
  color: #f76c47;
  text-decoration: none;
}

.email-link:hover {
  color: darkblue;
}

.footer-bottom {
  font-size: 1rem;
  color: #ffffff;
}
</style>
