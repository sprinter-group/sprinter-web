import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n);

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
