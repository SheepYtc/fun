import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: "/",
        redirect: "/Home"
    },
    {
        path: '/report_forms',
        name: 'report_forms',
        component: () =>
            import ("../views/report_forms.vue"),
    },
    {
        path: '/Home',
        name: 'home',
        component: () =>
            import ('../views/Home.vue'),
    }, {
        path: '/riddle',
        name: 'riddle',
        component: () =>
            import ('../components/riddle.vue'),
    },
    {
        path: '/idiom',
        name: 'idiom',
        component: () =>
            import ('../components/idiom.vue'),
    },
    {
        path: '/light-fan',
        name: 'light-fan',
        component: () =>
            import ('../components/light-fan.vue'),
    },
    {
        path: '/light-fan1',
        name: 'light-fan1',
        component: () =>
            import ('../components/light-fan1.vue'),
    },
    {
        path: '/riddleDa',
        name: 'riddleDa',
        component: () =>
            import ('../components/riddleDa.vue'),
    },
    {
        path: '/Brain-Twister',
        name: 'Brain-Twister',
        component: () =>
            import ('../components/Brain-Twister.vue'),
    },
    {
        path: '/Cultural-prover',
        name: 'Cultural-prover',
        component: () =>
            import ('../components/Cultural-proverb.vue'),
    },
    {
        path: '/idioms-solitaire',
        name: 'idioms-solitaire',
        component: () =>
            import ('../components/idioms-solitaire.vue'),
    },
    {
        path: '/RestYu',
        name: 'RestYu',
        component: () =>
            import ('../components/RestYu.vue'),
    },
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

export default router