import { createApp } from 'vue'
import App from './App.vue'

import container from './components/container'

const app = createApp(App)
app.config.globalProperties.$AILEMENTE = {
    size:"large"
}

app.use(container).mount('#app')
