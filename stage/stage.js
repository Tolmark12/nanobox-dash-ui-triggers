import triggers from '../src/main.js'
import Vue from 'vue'
import TriggerShim from './trigger-shim'

let shim = new TriggerShim()

Vue.config.productionTip = false;

// Nanobox dashboard base styles
require('nanobox-core-styles/scss/_base.scss')
require("script-loader!../node_modules/shadow-icons/rel/app.js")

// Callbacks
let callbacks = {
  save(data, cb) {
    console.log( "Saving changes:" )
    console.log( data )
    cb({})
  },
  cancel(cb) {
    cb({error:'This is a test error called on cancel'})
  }
}

new Vue({
  el       : '#app',
  template : '<triggers :model="model" :callbacks="callbacks" />',
  data     : {
    model     : shim.getShimData(),
    callbacks : callbacks
  },
  components:{ triggers }
})
