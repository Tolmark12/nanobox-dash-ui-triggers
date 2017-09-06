<script>
export default {
  name: 'actions-header',
  mounted(){ castShadows(this.$el[0]); },
  methods:{
    onAddTrigger() {
      console.log( 'add an action' )
    }
  }
}
</script>

<!--
  **** H T M L ****
-->

<template lang="pug">
  .then
    img.shadow-icon(data-src="then-arrow")
    .txt Then trigger the following actions :
    .btn.adder(v-on:click="onAddTrigger" )
      img.shadow-icon(data-src="add-condition")
      .txt Add an Action
</template>

<!--
  ***** C S S *****
-->

<style lang="scss" scoped>
  .then             {
    > svg           {margin-left:-12px; margin-right:15px; }
  }
</style>
