import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from './views/LoginPage.vue'
// import TimeLine from './components/TimeLine.vue'
// import HistoryRecord from './components/HistoryRecord.vue'
// import Keep from './components/Keep.vue'
// import Command from './components/Command.vue'
// import Users from './views/Users.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'loginRegister',
            component: LoginPage
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: '/test',
            name: 'test',
            component: () => import('./views/test.vue')
        },
        {
            path: '/index',
            name: 'main',
            component: () => import('./views/Home.vue')
        },
        {
            path: '/:id',
            name: 'user',
            component: () => import('./views/Users.vue'),
            props: true
        }
    ]
})
