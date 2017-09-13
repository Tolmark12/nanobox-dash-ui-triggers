<script>
import conditions            from './conditions'
import actions               from './actions'
import globalActions         from './global-actions'
import {errors, saveSection} from 'lexi'
import {EventBus}              from '../event-bus'

export default {
  name: 'trigger',
  components: {conditions, actions, globalActions, saveSection, errors},
  props:['model', 'callbacks'],
  data() {
    return{
      errors:null
    }
  },
  methods:{
    onSave() {
      this.clearErrors()
      this.callbacks.save( model.flatData, (response)=>{
        if( !this.checkAndShowErrors(response) )
          console.log( 'save successful' )
      })
    },
    onCancel() {
      this.clearErrors()
      this.callbacks.cancel( (response)=>{
        if( !this.checkAndShowErrors(response) )
          console.log( 'cancel successful' )
      })
    },
    // ------------------------------------ Helpers

    // Should we move these to the errors component?

    clearErrors() {
      this.errors = null
    },
    checkAndShowErrors(response) {
      if( response.error != undefined ){
        this.errors = response.error
        return true
      }else
        return false
    },
    onInput() {
      EventBus.$emit('trigger.name-changed')
    }
  }
}
</script>

<!--
  **** H T M L ****
-->

<template lang="pug">
  .trigger
    errors(:errors="errors")
    .name
      .label Name:
      input(v-model="model.data.trigger.name" @input="onInput")
    .main-content
      conditions(:model="model")
      actions(:model="model")
    .bottom.blue-item
      global-actions
      save-section(@save="onSave" @cancel="onCancel" v-if="model.isDirty" )
</template>

<!--
  ***** C S S *****
-->

<style lang="scss" scoped>
  .trigger        {width:100%; display:flex; flex-direction: column; font-size:16px; color:#7C98AB; font-weight:$semibold; font-style:italic;
    .name         {margin:20px 0; width: 100%;
      .label      {@include caps(#80878C, 12px); margin-bottom:5px; }
      input       {width:100%; height:35px; border-radius: 4px;}
    }
    .main-content {background:#D7DFE6;}
    .bottom       {display: flex; justify-content: space-between; min-height:46px; }
  }
</style>
