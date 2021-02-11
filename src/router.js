import { createWebHistory, createRouter } from "vue-router";
import Comments from "./components/Comments.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Comments,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;