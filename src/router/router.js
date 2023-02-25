import { createRouter, createWebHashHistory } from 'vue-router'

/* Carga inicial donde se trae todo
import InsertarCliente from '@/pages/InsertarCliente.vue'
import ActualizarCliente from '@/pages/ActualizarCliente.vue'
import BorrarCliente from '@/pages/BorrarCliente.vue'
import BuscarPorCedula from '@/pages/BuscarPorCedula.vue'
import InicioPag from '@/pages/InicioPag.vue'
import NoFound from '@/pages/NoFound.vue'

const routes = [
    {path: '/insertar', component: InsertarCliente},
    {path: '/actualizar', component: ActualizarCliente},
    {path: '/borrar', component: BorrarCliente},
    {path: '/buscar', component: BuscarPorCedula},
    {path: '/', component: InicioPag},
    {path: '/:pathMatch(.*)*', component: NoFound}

]
*/

/*Carga perezosa, se trae bajo demanda*/

const routes = [
    {
        path: '/',
        name: 'inicio',
        component: () => import(/* webpackChunkName: "InicioPag"*/ '@/pages/InicioPag.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: '404',
        component: () => import(/* webpackChunkName: "NoFound"*/ '@/pages/NoFound.vue')

    },
    {
        path: '/insertar',
        name: 'insertar',
        component: () => import(/* webpackChunkName: "InsertarCliente"*/ '@/pages/InsertarCliente.vue')

    },
    {
        path: '/actualizar',
        name: 'actualizar',
        component: () => import(/* webpackChunkName: "ActualizarCliente"*/ '@/pages/ActualizarCliente.vue')

    },
    {
        path: '/borrar',
        name: 'borrar',
        component: () => import(/* webpackChunkName: "BorrarCliente"*/ '@/pages/BorrarCliente.vue')

    },
    {
        path: '/buscar/:idCliente',
        name: 'buscar',
        component: () => import(/* webpackChunkName: "BuscarPorCedula"*/ '@/pages/BuscarPorCedula.vue')

    },

    {
        path: '/negado',
        name: '403',
        component: () => import(/* webpackChunkName: "NegadoPag"*/ '@/pages/NegadoPag.vue')

    },


]


const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

//guardianes de rutas Guardianes en Vue.JS

router.beforeEach((to, from, next) => {
    console.log({ to, from, next });
    // para darle el paso al recurso que quiere
    //next()

    const random = Math.random() * 10
    if (random > 5) {
        console.log('Autorizado')
        next()
    } else {
        console.log('No autorizado')
        next({ name: '403' })
    }


})

export default router