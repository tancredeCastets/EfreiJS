import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import Login from './components/login.vue';
import Products from './components/products';
import ProductDetails from './components/products';
import PanierAchat from './components/panierAchat.vue';
import Payement from './components/payement.vue';
import Ordre from './components/ordre.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/login',
            name: 'connexion',
            component: Login
        },        
        {
            path: '/products',
            name: 'produits',
            component: Products
        },        
        {
            path: "/product/:id",
            name: "ProductDetails",
            component: ProductDetails,
        },
        {
            path:"/PanierAchat",
            name: 'PanierAchat',
            component: PanierAchat
        },

        {
            path: '/payement',
            name: 'payement',
            component: Payement 
        },

        {
            path: '/ordre',
            name: 'ordre',
            component: Ordre 
        }

    ]
});

export default router;
