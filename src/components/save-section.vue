<script>
export default {
  name: 'save-section'
}
</script>

<!--
  **** H T M L ****
-->

<template lang="pug">
  .save-section
    .cancel(@click="$emit('close')" ) Cancel
    .button.lifecycle(@click="$emit('save')") Save
</template>

<!--
  ***** C S S *****
-->

<style lang="scss" scoped>
  .save-section {}
</style>
