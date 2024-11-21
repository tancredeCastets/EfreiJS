// router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import Store from './components/store.vue';
import More from './components/AppEvenMore.vue';
import HelloWorld from './components/HelloWorld.vue';
import Login from './components/login.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/more',
            name: 'More',
            component: More
        },
        {
            path: '/hello',
            name: 'Hello',
            component: HelloWorld
        },
        {
            path: '/login',
            name: 'connexion',
            component: Login
        },
        {
            path: '/store',
            name: 'acheter',
            component: Store
        }
    ]
});

export default router;
