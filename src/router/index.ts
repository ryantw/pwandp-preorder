import Vue from 'vue';
import VueRouter from 'vue-router';
import { routes } from './routes';
import { mode } from './mode';

Vue.use(VueRouter);

const router = new VueRouter({
  mode,
  base: process.env.BASE_URL,
  routes,
});

export {
  router,
  routes,
};
