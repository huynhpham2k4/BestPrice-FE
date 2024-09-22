import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// Sử dụng router trong ứng dụng
app.use(router)

// Mount ứng dụng
app.mount('#app')
