import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'
import Vuex from 'vuex'
import VTooltip from 'v-tooltip'
// https://github.com/Akryum/v-tooltip

Vue.use(Vuex)
Vue.use(VueI18n)
Vue.use(VTooltip)

//var messages = require('./locale').default;
//import messages from './locale'
import {messages} from './added';
window.i18n = new VueI18n({
  locale: 'en',
  messages
});

new Vue({
  el: '#app',
  i18n,
  render: h => h(App)
});
