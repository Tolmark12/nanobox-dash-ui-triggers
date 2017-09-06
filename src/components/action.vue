<script>
export default {
  name: 'action',
  methods:{
    onDelete() {
      console.log( 'delete action' )
    }
  },
  mounted(){ castShadows(this.$el[0]); }

}
</script>

<!--
  **** H T M L ****
-->

<template lang="pug">
  .action
    .btn.deleter(v-on:click="onDelete" )
      img.shadow-icon(data-src="condition-x")
</template>

<!--
  ***** C S S *****
-->

<style lang="scss" scoped>
  .action {}
</style>
