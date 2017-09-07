export default class TriggerShim{
  constructor() {
    this.conditionCount = 0
  }

  getShimData() {
    return{
      hosts      : this.getHosts(),
      components : this.getComponents(),
      trigger    : this.getTrigger(),
    }
  }

  // ------------------------------------ Hosts

  getHosts() {
    return [
      {id:"aws.1", name:"aws.1"}
    ]
  }

  // ------------------------------------ Components

  getComponents() {
    return [
      {id:"web.main", name:"web.main"},
      {id:"data.db", name:"data.db"}
    ]
  }

  // ------------------------------------ Trigger

  getTrigger() {
    return {
      conditionScope: "all",  // any, all
      context: 'web.main',    // id, all-components, all-hosts
      conditions:[
        this.getUsageCondition(),
        this.getUsageCondition(),
        this.getUsageCondition()
      ],
      actions:[
        this.getAction()
      ]
    }
  }

  getUsageCondition() {
    return {
      id:`c-${Date.now().toString(36) + this.conditionCount++}`,
      kind:'resource.cpu',
      details:{
        resource:'ram',
        direction:'exceeds',
        limit:'80',
        unit:'perc',
        doMeasureDuration:'false',
        duration:'10',
        durationMetric:'minutes',
      }
    }
  }

  getAction() {
    return {

    }
  }
}
