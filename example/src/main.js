import {
    createApp
} from 'vue'
import App from './App.vue'
import juan from '../../lib/index.esm'
import '../../lib/theme/index.css'


const app = createApp(App)

app.use(juan)
app.mount('#app')