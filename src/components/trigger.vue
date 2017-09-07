<script>
import conditions    from './conditions'
import actions       from './actions'
import globalActions from './global-actions'
import saveSection   from './save-section'
export default {
  name: 'trigger',
  components: {conditions, actions, globalActions, saveSection},
  props:['model', 'callbacks'],
  methods:{
    onSave() {
      this.callbacks.save( model.flatData, ()=>{
        console.log( 'save successful' )
      })
    },
    onCancel() {
      console.log( 'cancel' )
    }
  }
}
</script>

<!--
  **** H T M L ****
-->

<template lang="pug">
  .trigger
    .main-content
      conditions(:model="model.data")
      actions
    .bottom.blue-item
      global-actions
      save-section(@save="onSave" @cancel="onCancel" v-if="model.isDirty" )
</template>

<!--
  ***** C S S *****
-->

<style lang="scss" scoped>
  .trigger        {width:100%; display:flex; flex-direction: column; font-size:16px; color:#7C98AB; font-weight:$semibold; font-style:italic;
    .main-content {background:#D7DFE6;}
  }
  .bottom{display: flex; justify-content: space-between; min-height:46px; }
</style>
