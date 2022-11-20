import { createApp } from 'vue'
import App from './App.vue'
import VueSmoothScroll from 'vue3-smooth-scroll'
import Meta from 'vue-meta'

createApp(App).use(VueSmoothScroll).use(Meta).mount('#app')
