import React from 'react';

const LABEL_MODES = [
  'label-danger',
  'label-info',
  'label-warning',
  'label-primary',
  'label-success',
]

class Label extends React.Component {

  render() {
    return <span className={"label " + LABEL_MODES[this.props.mode]}>{this.props.text}</span>
  }
}

module.exports = {Label}
