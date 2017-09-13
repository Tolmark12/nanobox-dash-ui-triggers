<script>
import {dropdown} from 'lexi';
import {EventBus} from '../../event-bus'

export default {
  name: 'resource',
  props:['model', 'resource-model'],
  components:{dropdown},
  data() {
    return{
      changeDuration : "instantly"
    }
  },
  methods:{
    onMeasureKindChange(newMeasure) {

    },
    onDurationChange(newDuration){

    },
    onTimeMeasureChange(newTimeMeasure) {

    },
    onConditionDetailChange() {
      EventBus.$emit('condition.changed')
    }
  }
}
</script>

<!--
  **** H T M L ****
-->

<template lang="pug">
  .resource
    dropdown(v-model='model.direction' @changed="onConditionDetailChange")
      .option(value="exceeds") exceeds
      .option(value="drops-below") drops below
    input.ammount(v-model="model.limit" @input="onConditionDetailChange")
    dropdown(@changed="onConditionDetailChange" v-model="model.unit")
      .option(value="perc") %
      .option(value="mb") MB
      .option(value="gb") GB
    dropdown(v-model="model.doMeasureDuration" @changed="onConditionDetailChange")
      .option(value="false") ever
      .option(value="true") for more than
    input(v-if="model.doMeasureDuration == 'true'" v-model='model.duration' @input="onConditionDetailChange").duration
    dropdown(v-if="model.doMeasureDuration == 'true'" @changed="onConditionDetailChange" v-model='model.durationMetric')
      .option(value="seconds") seconds
      .option(value="minutes") minutes
      .option(value="hours") hours
      .option(value="days") days
</template>

<!--
  ***** C S S *****
-->

<style lang="scss" scoped>
  .resource {display: flex; align-items: center;
    > *  {margin:0 5px;}
    input{height:30px; border-radius:4px; margin:0 10px; padding-right:0;
      &.ammount{ width:50px; }
      &.duration{ width:50px; }
    }
  }
</style>
