<script>
export default {
  name: 'global-actions',
  methods:{
    duplicateTrigger() {
      console.log( "duplicate trigger" )
    },
    disableTrigger() {
      console.log( "disable trigger" )
    },
    deleteTrigger() {
      console.log( "delete trigger" )
    }
  },
  mounted(){ castShadows(this.$el[0]); }
}
</script>

<!--
  **** H T M L ****
-->

<template lang="pug">
  .global-actions
    //- input.lexi(type="radio" name="asdf")
    .item(v-on:click="duplicateTrigger" )
      img.shadow-icon(data-src="duplicate-trigger")
      .txt Duplicate
    .item(v-on:click="disableTrigger" )
      img.shadow-icon(data-src="disable-trigger")
      .txt Disable
    .item(v-on:click="deleteTrigger" )
      img.shadow-icon(data-src="delete-trigger")
      .txt Delete
</template>

<!--
  ***** C S S *****
-->

<style lang="scss" scoped>
  .global-actions {display:flex; align-items: center;
    .item         {display:flex; align-items: center; padding-top:10px; cursor:pointer;
      &:hover     {
        .txt      {color:#264153;}
      }
      .txt        {margin-left:9px; font-size:15px;  }
    }
  }
</style>
