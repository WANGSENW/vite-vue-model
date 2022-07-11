import { createApp } from 'vue'
import App from './App.vue'

import container from './components/container'
import Button from './components/button'

const app = createApp(App)
app.config.globalProperties.$AILEMENTE = {
    size:"large"
}

app.use(container)
app.use(Button)
app.mount('#app')
