<script>
import conditionsHeader from './conditions-header'
import condition from './condition'
export default {
  name: 'conditions',
  props: ['config'],
  components: {conditionsHeader, condition}
}
</script>

<!--
  **** H T M L ****
-->

<template lang="pug">
  .conditions
    conditions-header(:config="config")
    .rules
      condition
</template>

<!--
  ***** C S S *****
-->

<style lang="scss" scoped>
  .conditions {
  }
</style>
