<script>
import {EventBus} from '../event-bus'
export default {
  name: 'actions-header',
  mounted(){ castShadows(this.$el[0]); },
  methods:{
    onAddTrigger() { EventBus.$emit('action.new') }
  }
}
</script>

<!--
  **** H T M L ****
-->

<template lang="pug">
  .then
    .arrow
      img.shadow-icon(data-src="then-arrow")
    .txt Then trigger the following actions :
    .btn.adder(@click="onAddTrigger" )
      img.shadow-icon(data-src="add-condition")
      .txt Add an Action
</template>

<!--
  ***** C S S *****
-->

<style lang="scss" scoped>
  .then             {
    .arrow          {margin-left:-12px; margin-right:5px; }
  }
</style>
