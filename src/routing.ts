import { createRouter, createWebHistory } from 'vue-router';
import FormComponent from './components/FormComponent.vue';
import HistoryComponent from './components/HistoryComponent.vue';
import NotFound from './components/NotFound.vue';

const routes = [
  {
    name: 'home',
    path: '/',
    base: 'inwentarzApp',
    component: FormComponent,
  },
  {
    name: 'historia',
    path: '/historia',
    component: HistoryComponent,
  },
  {
    path: '/:notFound(.*)',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory('/inwentarzApp/'),
  routes,
});

export default router;
