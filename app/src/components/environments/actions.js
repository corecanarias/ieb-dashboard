import AppDispatcher from '../../app-dispatcher'


function postInit(body) {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    cache: 'default',
    body: body
  };
}

class EnvironmentsActions {

  refresh() {
    fetch('fixtures/environments.json').then(function(response) {
    	return response.json();
    }).then(function(j) {
      AppDispatcher.dispatch({
        actionType: 'REFRESH',
        data: j
      })
    });
  }

  updateVersion(env, ver) {
    fetch('fixtures/updateVersion.json/' + env, postInit(new URLSearchParams("ver=" + ver))).then(function(response) {
      return response.json();
    }).then(function(j) {
      AppDispatcher.dispatch({
        actionType: 'CHANGE',
        env: env,
        ver: ver
      })
    });
  }
}

var environmentsActions = new EnvironmentsActions()

module.exports = environmentsActions
