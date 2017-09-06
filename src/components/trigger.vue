<script>
import conditions from './conditions'
import actions from './actions'
import globalActions from './global-actions'
export default {
  name: 'trigger',
  components: {conditions, actions, globalActions},
  props:['config']
}
</script>

<!--
  **** H T M L ****
-->

<template lang="pug">
  .trigger
    .main-content
      conditions(:config="config")
      actions
    global-actions
</template>

<!--
  ***** C S S *****
-->

<style lang="scss" scoped>
  .trigger        {width:100%; display:flex; flex-direction: column; font-size:16px; color:#7C98AB; font-weight:$semibold; font-style:italic;
    .main-content {background:#D7DFE6;}
  }
</style>
