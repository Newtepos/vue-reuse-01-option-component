import { createApp } from 'vue';

import App from './App.vue';
import mount from './mixins/mount';

const app = createApp(App);

app.mixin(mount);

app.mount('#app');
