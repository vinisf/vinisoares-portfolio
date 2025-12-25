import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import reveal from './directives/v-reveal'

const app = createApp(App)

app.directive('reveal', reveal)

app.mount('#app')
