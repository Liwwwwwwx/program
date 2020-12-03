import Vue from 'vue'
import Router from 'vue-router'
import BasePage from '@/components/BasePage'
import login from '@/pages/login'
import home from '@/pages/home/home'
import data from '@/pages/data'
import signIn from '@/pages/signIn'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path:'/',
            name:'login',
            component:login
        },
        {
            path:'/home',
            name:'home',
            component:home
        },
        {
            path:'/data',
            name:'data',
            component:data
        }, 
        {
            path:'/signIn',
            name:'signIn',
            component:signIn
        }
    ]
})