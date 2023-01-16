import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import './assets/main.css';
import BaseDate from '@/components/BaseDate.vue';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component('BaseDate', BaseDate);

app.mount('#app');
