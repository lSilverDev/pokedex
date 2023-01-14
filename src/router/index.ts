import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Pokedex.vue";

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: Home
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})


export default router;