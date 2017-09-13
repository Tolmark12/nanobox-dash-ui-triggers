<script>
import resource from './conditions/resource'
import timeEvent from './conditions/time-event'

import {dropdown} from 'lexi'
import {EventBus} from '../event-bus'
export default {
  name: 'condition',
  components:{dropdown, resource, timeEvent},
  props:['condition', 'model'],
  methods:{
    deleteClick() { EventBus.$emit('condition.delete', this.condition.id) },
    getKind() {
      if(this.condition.kind.indexOf('resource.') !== -1)
        return 'resource'
      else if(this.condition.kind.indexOf('time.') !== -1)
        return 'time'
      else
        return ''
    }
  },
  mounted(){ castShadows(this.$el[0]); }

}
</script>

<!--
  **** H T M L ****
-->

<template lang="pug">
  .condition
    dropdown(v-model="condition.kind")
      .option(value="resource.ram") RAM usage
      .option(value="resource.cpu") CPU usage
      .option(v-if="model.isHost" value="resource.disk") Disk usage
      .option(v-if="model.isHost" value="resource.swap") Swap usage
      .option(value="time.is") Time is

    //- If resource
    resource(v-if="getKind() == 'resource'" :model="condition.details" )
    time-event(v-else-if="getKind() == 'time'" )


    .btn.deleter(@click="deleteClick" )
      img.shadow-icon(data-src="condition-x")
</template>

<!--
  ***** C S S *****
-->

<style lang="scss" scoped>
  .condition {display:flex; align-items: center; height:60px; padding:0 14px 0 30px; border-bottom:solid 1px #B7C3CF;}
</style>
