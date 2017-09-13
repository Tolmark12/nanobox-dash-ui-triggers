<script>
import {EventBus} from '../event-bus'
import {dropdown} from 'lexi'
import message from './actions/message'
export default {
  name       : 'action',
  props      : ['action-data'],
  components : {dropdown, message},
  methods    : {
    onDelete() { EventBus.$emit('action.delete', this.actionData.id) }
  },
  mounted(){ castShadows(this.$el[0]); }

}
</script>

<!--
  **** H T M L ****
-->

<template lang="pug">
  .action
    dropdown(v-model="actionData.kind")
      .option(value='message') Send
      .option(value='script') Run Script
      .option(value='post') POST to API

    message(v-if="actionData.kind == 'message'" :params='actionData.details')

    .btn.deleter(@click="onDelete" )
      img.shadow-icon(data-src="condition-x")
</template>

<!--
  ***** C S S *****
-->

<style lang="scss" scoped>
  .action {display: flex; align-items: center; }
</style>
