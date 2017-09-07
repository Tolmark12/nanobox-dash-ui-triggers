<script>
import {dropdown} from 'lexi'
import {EventBus} from '../event-bus'

export default {
  name: 'conditions-header',
  components:{dropdown},
  props: ['model'],
  data() {
    return{
      hasHosts      : this.model.hosts.length > 0,
      hasComponents : this.model.components.length > 0
    }
  },
  methods:{
    onScopeChange(newScope){ EventBus.$emit('trigger.change-scope', newScope) },
    addCondition() { EventBus.$emit('condition.new') },
    onContextChange(context) { EventBus.$emit('trigger.change-context', context) },
  },
  mounted(){ castShadows(this.$el[0]); }

}
</script>

<!--
  **** H T M L ****
-->

<template lang="pug">
.if
  dropdown(slot="options" @changed="onScopeChange" v-model="model.trigger.conditionScope")
    .option(value="any") Any
    .option(value="all") All
  .txt of the following conditions are true for :
  dropdown(slot="options" v-on:changed="onContextChange" v-model="model.trigger.context")
    .label(v-show="hasHosts" ) Hosts
    .option(v-for="(host, i) in model.hosts" :key="i" :value="host.id") {{host.name}}
    .option(v-if="hasHosts" value="any.host") any host
    .label Components
    .option(v-for="(component, i) in model.components" :key="i" :value="component.id") {{component.name}}
    .option(value="any.component") any component

  //- dropdown(slot="options" v-on:changed="onScopeChange" default="any")
  //- select.lexi#scope
  //-   if hasAnyEntity
  //-     optgroup(label="General Types")
  //-       if hasHosts
  //-         option(value="$any-hosts") any host
  //-       if hasAppComponents
  //-         option(value="$any-appComponents") any app component
  //-       if hasPlatformComponents
  //-         option(value="$any-platformComponents") any platform component
  //-   if hasHosts
  //-     +addSection("Hosts", hosts)
  //-   if hasAppComponents
  //-     +addSection("App", appComponents)
  //-   if hasPlatformComponents
  //-     +addSection("Platform", platformComponents)
  //-   optgroup(label="Misc")
  //-     option(value="app") the app
  .btn.adder(v-on:click="addCondition" )
    img.shadow-icon(data-src="add-condition")
    .txt Add Condition
</template>

<!--
  ***** C S S *****
-->

<style lang="scss" scoped>
  .if        {
    &:before {background: #7C98AB; content:"If"; width:38px; height:38px; border-radius:50%; color:white; font-size:21px; font-style:italic; font-weight: $semibold; display: flex; align-items: center; justify-content: center; margin-left:-16px; margin-right:7px; }
    .txt     {}
  }
</style>
