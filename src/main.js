import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { editable,clickOutsideDirective,clickOnEscDirective } from './directives'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


import './styles/styles.scss'

const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.directive('editable', editable)
app.directive('click-outside', clickOutsideDirective)
app.directive('click-esc', clickOnEscDirective)

app.mount('#app')
