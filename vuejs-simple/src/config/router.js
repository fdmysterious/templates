import VueRouter from 'vue-router'

import PageHome from "../pages/home.vue";
const  PageTest = { template : "<h1>TEST2</h1>" }

const routes = [
    { "path" : "/"     , component : PageHome },
    { "path" : "/test", component : PageTest }
];

const routes_final = routes.slice();
routes_final.push(
    { path : "*", redirect : "/" }
)

const router = new VueRouter({
    mode   : "history",
    routes : routes_final
})

console.log( routes );
export default router;
