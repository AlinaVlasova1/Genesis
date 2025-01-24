import { createApp } from 'vue'
import App from './App.vue'
import {createPinia} from "pinia";
import {createRouter, createWebHistory} from "vue-router";
import MainPage from "@/pages/MainPage.vue";

const pinia = createPinia();
export const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Home",
            component: MainPage,
        },
    ]});

createApp(App).use(pinia).use(router).mount('#app')
