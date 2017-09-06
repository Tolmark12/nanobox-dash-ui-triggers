<script>
import {dropdown} from 'lexi';
export default {
  name: 'resource',
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
      this.changeDuration = newDuration;
    },
    onTimeMeasureChange(newTimeMeasure) {

    }
  }
}
</script>

<!--
  **** H T M L ****
-->

<template lang="pug">
  .resource
    input.ammount
    dropdown(slot="options" v-on:changed="onMeasureKindChange")
      .option(value="perc") %
      .option(value="mb") MB
      .option(value="gb") GB
    dropdown(slot="options" v-on:changed="onDurationChange")
      .option(value="instantly") ever
      .option(value="duration") for more than
    input(v-if="changeDuration != 'instantly'" ).duration
    dropdown(v-if="changeDuration != 'instantly'" slot="options" v-on:changed="onTimeMeasureChange")
      .option(value="seconds") seconds
      .option(value="minutes") minutes
      .option(value="hours") hours
      .option(value="days") days
</template>

<!--
  ***** C S S *****
-->

<style lang="scss" scoped>
  .resource {display: flex;
    > *  {margin:0 5px;}
    input{height:30px; border-radius:4px; margin:0 10px; padding-right:0;
      &.ammount{ width:50px; }
      &.duration{ width:50px; }
    }
  }
</style>
