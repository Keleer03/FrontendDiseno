import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/PaginaPrincipal.vue'
import CrearClienteFisico from '../views/CrearClienteFisico.vue'
import CrearClienteJuridico from '@/views/CrearClienteJuridico.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/crear-cliente-fisico',
    name: 'CrearClienteFisico',
    component: CrearClienteFisico
  },
  {
    path: '/crear-cliente-juridico',
    name: 'CrearClienteJuridico',
    component: CrearClienteJuridico
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
