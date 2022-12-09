import { createApp } from 'vue'
import './style.css'
import fontawesome from './utils/fontawesome'
import App from './App.vue'

createApp(App)
    .component(fontawesome[0], fontawesome[1])
    .mount('#app')
