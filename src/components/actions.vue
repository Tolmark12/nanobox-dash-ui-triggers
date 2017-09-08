<script>
import actionsHeader from './actions-header'
import action from './action'
export default {
  name: 'actions',
  props: ['model'],
  components:{actionsHeader, action},
}
</script>

<!--
  **** H T M L ****
-->

<template lang="pug">
  .actions
    actions-header
    action(v-for="(action, i) in model.data.trigger.actions" :key="i" :action-data="action")
</template>

<!--
  ***** C S S *****
-->

<style lang="scss" scoped>
  .actions {}
</style>
