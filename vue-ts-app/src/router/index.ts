import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import DirektifView from '@/views/DirektifView.vue';
import DataBindingView from "@/views/DataBindingView.vue";



const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/direktif', name: 'direktif', component: DirektifView },
  { path: '/data-binding', name: 'data-binding', component: DataBindingView },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
