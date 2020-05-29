import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TechInfo from '../views/TechInfo'
import Products from '../views/Products'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/Home',
        name: 'Home',
        component: Home
    },
    {
        path: '/TechInfo',
        name: 'TechInfo',
        component: TechInfo
    },
    {
        path: '/Products',
        name: 'Products',
        component: Products
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior( ) {
        return { x: 0, y: 0 };
    }
})

export default router
