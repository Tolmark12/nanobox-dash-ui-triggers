import {EventBus} from './event-bus'
import _ from 'lodash'
export default class TriggerModel {

  constructor(origData, dontBuild=false) {
    if( dontBuild )
      return

    this.originalData = origData
    this.data         = _.cloneDeep(origData, false)
    this.isDirty      = false
    window.model      = this

    EventBus.$on('action.new'            , this.addAction);
    EventBus.$on('action.delete'         , this.deleteAction);
    EventBus.$on('condition.new'         , this.addCondition);
    EventBus.$on('condition.delete'      , this.deleteCondition);
    EventBus.$on('condition.changed'     , this.checkDataState);
    EventBus.$on('trigger.change-context', this.changeTriggerContext);
    EventBus.$on('trigger.change-scope'  , this.checkDataState);

    this.setIsHost()
  }

  // ------------------------------------ Conditions

  addCondition = ()=> {
    this.data.trigger.conditions.push(this.getBlankCondition())
    this.checkDataState()
  }

  deleteCondition = (id)=> {
    let index = _.findIndex(this.data.trigger.conditions, {'id':id} )
    this.data.trigger.conditions.splice( index, 1 )
    this.checkDataState()
  }

  // ------------------------------------ Actions

  deleteAction = (id)=> {
    let index = _.findIndex(this.data.trigger.actions, {'id':id} )
    this.data.trigger.actions.splice( index, 1 )
    this.checkDataState()
  }

  addAction = ()=> {
    this.data.trigger.actions.push(this.getBlankAction())
  }

  // ------------------------------------ Triggers

  changeTriggerContext = (newContext)=> {
    this.checkDataState()
    this.setIsHost()
  }

  // ------------------------------------ Getters / Setters

  get flatData() { return JSON.parse(JSON.stringify(this.data)) }

  // ------------------------------------ Helpers

  setIsHost() {
    this.isHost =  _.find(this.data.hosts, {id: this.data.trigger.context}) !== undefined
  }

  checkDataState = ()=> {
    this.isDirty = ! _.isEqual(this.originalData, this.data)
  }

  getBlankAction() {
    return{
      id:`c-${Date.now().toString(36)}`,
      kind: 'message',
      details:{
        messageType:'email',
        messageTarget:'all'
      }
    }
  }

  getBlankCondition() {
    return {
      id:`c-${Date.now().toString(36)}`,
      kind:'resource.ram',
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
}
