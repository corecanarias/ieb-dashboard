import React from 'react';
import { DropdownButton, MenuItem, Modal, Button } from 'react-bootstrap';

export default  class ModalDeploy extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      version: 'Redeploy'
    }
  }

  dropdownSelect(eventKey, event) {
      this.setState({version: eventKey})
  }

  dropdown() {
    return (
      <DropdownButton title={this.state.version} id="bg-nested-dropdown" onSelect={(eventKey, event) => this.dropdownSelect(eventKey, event)}>
        <MenuItem eventKey="redeploy">Redeploy</MenuItem>
        <MenuItem eventKey="1">Dropdown link1</MenuItem>
        <MenuItem eventKey="2">Dropdown link2</MenuItem>
      </DropdownButton>
    )
  }

  render() {

    return (
      <Modal show={this.props.open} onHide={this.props.close}>
        <Modal.Header closeButton>
          <Modal.Title>Deploy <b>{this.props.environment}</b> environment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {this.dropdown()}
        </Modal.Body>
        <Modal.Footer>
          <Button bsStyle="default" onClick={this.props.close} data-dismiss="modal">Close</Button>
          <Button bsStyle="primary" onClick={() => this.props.onDeploy(this.state.version)}>Deploy</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}
