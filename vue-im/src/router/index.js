import Vue from 'vue'
import Router from 'vue-router'
import imHome from '@/components/imHome'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'imHome',
        component: imHome
    }]
})