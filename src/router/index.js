import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const Home = () => import('../views/home/Home.vue');
const Category= () => import('../views/category/Category.vue');
const ShopCart = () => import('../views/shopCart/ShopCart.vue');
const Profile = () => import('../views/profile/Profile.vue');

const routes=[
    {
        path:"",
        redirect:"/home"
    },
    {
        path:'/home',
        component:Home
    },
    {
        path:"/category",
        component:Category
    },
    {
        path:"/shopCart",
        component:ShopCart
    },
    {
        path:"/profile",
        component:Profile
    }
]
const router =new VueRouter({
    routes,
    mode:'history',
})
export default router;