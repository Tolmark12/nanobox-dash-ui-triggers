<script>
import {EventBus} from '../event-bus'
export default {
  name: 'action',
  methods:{
    onDelete() { EventBus.$emit('action.delete') }
  },
  mounted(){ castShadows(this.$el[0]); }

}
</script>

<!--
  **** H T M L ****
-->

<template lang="pug">
  .action
    .btn.deleter(@click="onDelete" )
      img.shadow-icon(data-src="condition-x")
</template>

<!--
  ***** C S S *****
-->

<style lang="scss" scoped>
  .action {}
</style>
