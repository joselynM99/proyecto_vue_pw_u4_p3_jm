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
        component: () => import(/* webpackChunkName: "InicioPag"*/ '@/pages/InicioPag.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import(/* webpackChunkName: "NoFound"*/ '@/pages/NoFound.vue')

    },
    {
        path: '/insertar',

        component: () => import(/* webpackChunkName: "InsertarCliente"*/ '@/pages/InsertarCliente.vue')

    },
    {
        path: '/actualizar',

        component: () => import(/* webpackChunkName: "ActualizarCliente"*/ '@/pages/ActualizarCliente.vue')

    },
    {
        path: '/borrar',

        component: () => import(/* webpackChunkName: "BorrarCliente"*/ '@/pages/BorrarCliente.vue')

    },
    {
        path: '/buscar',

        component: () => import(/* webpackChunkName: "BuscarPorCedula"*/ '@/pages/BuscarPorCedula.vue')

    },


]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router