import triggers from '../src/main.js'
import Vue from 'vue'
import TriggerShim from './trigger-shim'

let shim = new TriggerShim()
Vue.config.productionTip = false;

// Nanobox dashboard base styles
require('nanobox-core-styles/scss/_base.scss')
require("script-loader!../node_modules/shadow-icons/rel/app.js")

new Vue({
  el       : '#app',
  template : '<triggers :config="config" />',
  data     : {
    config : shim.getShimData()
  },
  components:{ triggers }
})
