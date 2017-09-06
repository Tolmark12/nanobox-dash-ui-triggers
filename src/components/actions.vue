<script>
import actionsHeader from './actions-header'
import action from './action'
export default {
  name: 'actions',
  components:{actionsHeader, action},
}
</script>

<!--
  **** H T M L ****
-->

<template lang="pug">
  .actions
    actions-header
    action
</template>

<!--
  ***** C S S *****
-->

<style lang="scss" scoped>
  .actions {
  }
</style>
