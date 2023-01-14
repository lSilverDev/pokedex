import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Pokedex.vue";

const rotas: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: Home
    }
];

const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
})


export default roteador;