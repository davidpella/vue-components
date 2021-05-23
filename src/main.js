import { createApp } from 'vue';
import App from './App.vue';
import router from "./routers";

import './css/style.css';
import 'animate.css';

const app = createApp(App);

app.use(router);

app.mount('#app')
