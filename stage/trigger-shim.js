import Model from '../src/trigger-model.js'

export default class TriggerShim{
  constructor() {
    this.conditionCount = 0
    this.model = new Model({}, true)
  }

  getShimData() {
    return{
      hosts          : this.getHosts(),
      components     : this.getComponents(),
      trigger        : this.getTrigger(),
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
      name:"My Trigger",
      id:"abce1234",
      conditionScope: "all",  // any, all
      context: 'web.main',    // id, all-components, all-hosts
      conditions:[
        this.model.getBlankCondition(),
        this.model.getBlankCondition(),
        this.model.getBlankCondition()
      ],
      actions:[
        this.model.getBlankAction()
      ]
    }
  }
}
