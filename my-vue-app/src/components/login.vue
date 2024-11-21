<template>
    <div class="login-page">
      <h1>Connexion</h1>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="email">Adresse e-mail :</label>
          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="Entrez votre e-mail"
            required
          />
        </div>
        <div class="form-group">
          <label for="password">Mot de passe :</label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Entrez votre mot de passe"
            required
          />
        </div>
        <button type="submit" class="btn">Se connecter</button>
      </form>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: "HelloWord",
    data() {
      return {
        email: "",
        password: "",
        errorMessage: ""
      };
    },
    methods: {
      async handleLogin() {
        try {
          // Exemple : Envoi des informations de connexion au serveur
          const response = await axios.post("http://localhost:3000/api/login", {
            email: this.email,
            password: this.password,
          });
  
          // Si la connexion réussit
          if (response.data.success) {
            alert("Connexion réussie !");
            // Stocker un token ou une session si nécessaire
            localStorage.setItem("token", response.data.token);
  
            // Rediriger vers une autre page, comme la page d'accueil
            this.$router.push("/");
          } else {
            this.errorMessage = "Identifiants incorrects.";
          }
        } catch (error) {
          this.errorMessage = "Une erreur est survenue. Vérifiez vos informations.";
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .login-page {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background: #fff;
  }
  
  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
  }
  
  button:hover {
    background: #0056b3;
  }
  
  .error {
    color: red;
    text-align: center;
    margin-top: 10px;
  }
  </style>
  