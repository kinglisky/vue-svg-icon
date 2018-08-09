import Vue from 'vue'
import App from './App.vue'
import IconFont from './icon-font'

IconFont.regist();
Vue.use(IconFont);

new Vue({
  el: '#app',
  render: h => h(App)
})
