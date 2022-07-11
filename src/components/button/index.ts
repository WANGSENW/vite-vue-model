import Button from './button.vue'
import { App } from 'vue'

export default {
    install(app: App) {
        console.log(Button)
        app.component(Button.name,Button)
    }
}