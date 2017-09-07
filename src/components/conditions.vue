<script>
import conditionsHeader from './conditions-header'
import condition from './condition'
export default {
  name: 'conditions',
  props: ['model'],
  components: {conditionsHeader, condition}
}
</script>

<!--
  **** H T M L ****
-->

<template lang="pug">
  .conditions
    conditions-header(:model="model")
    .rules
      condition(v-for="(condition, i) in model.trigger.conditions" :key="i" :condition="condition")
</template>

<!--
  ***** C S S *****
-->

<style lang="scss" scoped>
  .conditions {
  }
</style>
