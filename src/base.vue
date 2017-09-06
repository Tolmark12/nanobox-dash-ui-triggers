<script type="text/babel">
import trigger from './components/trigger'

export default {
  name: 'triggers',
  props:['config'],
  components:{trigger},
  methods:{},
}
</script>

<!--
  **** H T M L ****
-->

<template lang="pug">
  trigger(:config="config")
</template>

<!--
  **** C S S ****
-->

<style lang="scss" >
  .trigger{
    @import "./components/shared";
  }
</style>
