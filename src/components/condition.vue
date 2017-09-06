<script>
import {dropdown} from 'lexi'
import resource from './conditions/resource'
export default {
  name: 'condition',
  components:{dropdown, resource},
  data() {
    return{
      kind:"resource"
    }
  },
  methods:{
    onDelete() {
      console.log( 'delete rule' )
    },
    onTriggerKindChange(newKind) {
      switch (newKind){
        case "ram.exceeds":
        case "cpu.exceeds":
        case "disk.exceeds":
        case "swap.exceeds":
          this.kind = "resource"
          break
      }
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
    dropdown(slot="options" v-on:changed="onTriggerKindChange")
      .option(value="ram.exceeds") RAM usage exceeds
      .option(value="cpu.exceeds") CPU usage exceeds
      .option(value="disk.exceeds") Disk usage exceeds
      .option(value="swap.exceeds") Swap usage exceeds
      .option(value="time.is") Time is

    //- If resource
    resource(v-if="kind == 'resource'" )

    .btn.deleter(v-on:click="onDelete" )
      img.shadow-icon(data-src="condition-x")
</template>

<!--
  ***** C S S *****
-->

<style lang="scss" scoped>
  .condition {display:flex; align-items: center; height:60px; padding:0 14px 0 30px; border-bottom:solid 1px #B7C3CF;}
</style>
