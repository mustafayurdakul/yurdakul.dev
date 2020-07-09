import Vue from 'vue'
import App from './App.vue'
import router from './router'

/* Import Bootstrap */
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

/* Fontawesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faHackerrank } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeOpenText, faMapMarkedAlt, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.component('font-awesome-icon', FontAwesomeIcon)
library.add(faGithub, faEnvelopeOpenText, faMapMarkedAlt, faPhone, faHackerrank)


/* Typing */
import VueTypedJs from 'vue-typed-js'
Vue.use(VueTypedJs)

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
