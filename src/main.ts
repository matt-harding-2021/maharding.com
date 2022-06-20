import { createApp } from 'vue'
import { Vue3Mq } from "vue3-mq";
import router from './router'
import App from './App.vue'
import './assets/styling/tailwind.css'

createApp(App)
  .use(Vue3Mq, {
    breakpoints: {
      mobile: 0,
      tablet: 550,
      desktop: 1250,
    },
    defaultBreakpoint: 'mobile' // Mobile First
  })
  .use(router)
  .mount('#app')
