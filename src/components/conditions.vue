<script>
import conditionsHeader from './conditions-header'
import condition from './condition'
import _ from 'lodash'
export default {
  name: 'conditions',
  props: ['model'],
  components: {conditionsHeader, condition},
  methods:{

  }
}
</script>

<!--
  **** H T M L ****
-->

<template lang="pug">
  .conditions
    conditions-header(:model="model.data")
    .rules
      condition(v-for="(condition, i) in model.data.trigger.conditions" :key="i" :condition="condition" :model="model")
</template>

<!--
  ***** C S S *****
-->

<style lang="scss" scoped>
  .conditions {
  }
</style>
