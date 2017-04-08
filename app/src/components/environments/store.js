import EventEmitter from 'events/events';
import AppDispatcher from '../../app-dispatcher'

var CHANGE_EVENT = 'change';

var environments = {}

function updateVersion(env, newVer) {
  environments[env] = newVer
}


class EnvironmentStore extends EventEmitter {

  getAll() {
    var res = [];
    for(let e of Object.keys(environments)) {
      res.push(this.getEnvironment(e))
    }
    return res;
  }

  getEnvironment(env) {
    return [env, environments[env]['version'], environments[env]['lmc'], environments[env]['iam']]
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
}

var environmentStore = new EnvironmentStore();

AppDispatcher.register(function(action) {
  console.log(action)
  if(action.actionType == 'REFRESH') {
    environments = action.data
    environmentStore.emitChange()
  }
})

module.exports = environmentStore
