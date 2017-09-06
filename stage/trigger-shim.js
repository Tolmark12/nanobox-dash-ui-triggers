export default class TriggerShim{
  constructor() {}

  getShimData() {
    return{
      hosts      : this.getHosts(),
      components : this.getComponents(),
      trigger    : this.getTrigger(),
    }
  }

  getHosts() {
    return [
      {id:"aws.1", name:"aws.1"}
    ]
  }

  getComponents() {
    return [
      {id:"web.main", name:"web.main"},
      {id:"data.db", name:"data.db"}
    ]
  }

  getTrigger() {
    return {
      conditionScope: "all",  // any, all
      context: 'web.main',    // id, all-components, all-hosts
    }
  }
}
