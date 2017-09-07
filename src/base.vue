<script type="text/babel">
import trigger from './components/trigger'
import TriggerModel from './trigger-model'
export default {
  name: 'triggers',
  props:['model', 'callbacks'],
  components:{trigger},
  data() {
    console.log( this.callbacks )
    return {
      triggerModel : new TriggerModel(this.model)
    }
  },
  methods:{},

}
</script>

<!--
  **** H T M L ****
-->

<template lang="pug">
  trigger(:model="triggerModel" :callbacks="callbacks")
</template>

<!--
  **** C S S ****
-->

<style lang="scss" >
  .trigger{
    @import "./components/shared";
  }
</style>
