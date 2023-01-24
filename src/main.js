import { createApp } from 'vue';
import BootstrapVue3 from 'bootstrap-vue-3';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import UsersComponent from './components/users/Users.vue';
import UserComponent from './components/users/User.vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/users' },
    { path: '/users', component: UsersComponent },
    { path: '/users/:id', component: UserComponent, props: true },
    { path: '/:notFound(.*)', redirect: '/users' },
  ],
});

const app = createApp(App);

app.use(router);
app.use(BootstrapVue3);

app.mount('#app');
