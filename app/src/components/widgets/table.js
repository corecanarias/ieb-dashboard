import React from 'react';
import newId from './id';

class Column extends React.Component {

  render() {
    var props = this.props.style ? {style: this.props.style} : {}
    return (<th {...props}>{this.props.name}</th>)
  }
}

class Table extends React.Component {

  componentWillMount() {
      this.id = newId('Table');
  }

  render() {
    var columns = getColumnsByType(this.props.children, Column);
    var cells = []
    for(var i = 0; i < this.props.rowCount; i++) {
      var rowId = this.id + "_row_" + i
      var row = columns.map(function(c) {
        return <td key={rowId + c.key}>{c.props.cell(i)}</td>
      })
      cells.push(<tr key={rowId}>{row}</tr>)
    }

    return (
      <table className="table table-bordered table-hover">
      <thead>
        <tr>
          {columns}
        </tr>
      </thead>
      <tbody>
      {cells}
      </tbody>
      </table>
    )
  }
}

function getColumnsByType(columns, colType) {
  return React.Children.map(columns, function(c) {
    if(c.type == colType)
      return c
  });
}

module.exports = {Table, Column}
