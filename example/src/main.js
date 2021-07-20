import {
    createApp
} from 'vue'
import App from './App.vue'
import juan from '../../lib/index'
import '../../lib/theme/index.css'


const app = createApp(App).mount('#app')
app.use(juan)