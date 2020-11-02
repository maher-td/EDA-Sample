import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../Assets/CSS/Vendor/style.css' 
import '../Assets/CSS/main-ltr.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
