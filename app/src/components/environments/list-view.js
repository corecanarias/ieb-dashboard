import React from 'react';
import EnvironmentStore from './store'
import Actions from './actions'
import {Table, Column} from '../widgets/table'
import {Label} from '../widgets/style'
import ModalDeploy from './modal-deploy'

export default  class EnvironmentsList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      environments: [],
      deployDialog: false,
      selectedEnvironment: 'CI'
    }
    this._onChange = this._onChange.bind(this)
  }

  _onChange() {
    this.setState({environments: EnvironmentStore.getAll()});
  }

  componentDidMount() {
    EnvironmentStore.addChangeListener(this._onChange);
    Actions.refresh()
  }

  openDeployDialog(env) {
    this.setState({
      deployDialog: true,
      selectedEnvironment: env
    })
  }

  closeDeployDialog() {
    this.setState({deployDialog: false})
  }

  onDeploy(ver) {
    console.log('deploy ' + this.state.selectedEnvironment + 'version: ' + ver)
    Actions.updateVersion(this.state.selectedEnvironment, ver)
    this.closeDeployDialog()
  }

  render() {
    var environments = this.state.environments;

    if(environments.length == 0) {
      return <p>No environments found</p>
    }
    var secured = <Label mode="1" text="Secured" />
    var unsecured = <Label mode="0" text="Open" />
    return (
      <div>
        <ModalDeploy environment={this.state.selectedEnvironment}
                     open={this.state.deployDialog}
                     close={() => {this.closeDeployDialog()}}
                     onDeploy={(ver) => this.onDeploy(ver)}/>
        <Table rowCount={environments.length}>
          <Column name="Env" style={{width: '60px'}} cell={idx => environments[idx][0]} />
          <Column name="Version" cell={idx =>
            <div>{environments[idx][1]}
              <a href="#" onClick={() => this.openDeployDialog(environments[idx][0])}> Deploy new version</a>
            </div>} />
          <Column name="Security" style={{width: '40px'}} cell={idx =>
            environments[idx][2] ? secured : unsecured} />
        </Table>
      </div>
    )
  }
}
