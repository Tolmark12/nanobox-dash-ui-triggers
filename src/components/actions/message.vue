<script>
import {dropdown} from 'lexi'

export default {
  name       : 'message',
  props      : ['params'],
  components : {dropdown}
}
</script>

<!--
  **** H T M L ****
-->

<template lang="pug">
  .message
    dropdown(v-model='params.messageType')
      .option(value='email') Email
      .option(value='text') Text Message
    .txt to:
    dropdown(v-model='params.messageTarget')
      .option(value='all') App owner and all collaborators
      .option(value='custom') custom
    input(v-if="params.messageTarget != 'all'" )
</template>

<!--
  ***** C S S *****
-->

<style lang="scss" scoped>
  .message {display: flex; align-items: center; flex-grow: 1; padding-left:10px;
    > *    {white-space: nowrap;}
    input  {flex-grow: 12; margin: 0 10px; }
  }
</style>
