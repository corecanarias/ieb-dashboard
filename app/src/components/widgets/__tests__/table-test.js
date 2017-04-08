jest.unmock('../table');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expectJSX from 'jasmine-expect-jsx';
import {Table, Column} from '../table'

function ShallowRender(render) {
  let renderer = TestUtils.createRenderer();
  renderer.render(render);
  return renderer.getRenderOutput();
}

describe('TableColumn', () => {
  it('Render a table column', () => {

    expect(ShallowRender(
      <Column style="style" name="Column Name" />
    )).toEqualJSX(
      <th style="style">Column Name</th>
    );
  })

  it('Render a table column without style', () => {

    expect(ShallowRender(
      <Column name="Column Name" />
    )).toEqualJSX(
      <th>Column Name</th>
    );
  })
});


describe('Table', () => {
  it('Render a table', () => {

    expect(ShallowRender(
      <Table rowCount="1">
        <Column name="ColName" cell={idx => "value"} />
      </Table>
    )).toEqualJSX(
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <Column cell={idx => "value"} name="ColName"/>
          </tr>
       </thead>
        <tbody>
          <tr>
            <td>value</td>
          </tr>
        </tbody>
      </table>
    );
  })

  it('Render an empty table', () => {

    expect(ShallowRender(
      <Table>
        <Column name="ColName" cell={idx => "value"} />
      </Table>
    )).toIncludeJSX(
        <tbody />
    );
  })

  it('Render the cell index', () => {

    expect(ShallowRender(
      <Table rowCount="3">
        <Column name="ColName" cell={idx => idx} />
      </Table>
    )).toIncludeJSX(
      <tbody>
        <tr><td>0</td></tr>
        <tr><td>1</td></tr>
        <tr><td>2</td></tr>
      </tbody>
    );
  })

  it('Render the cell index in multiple columns', () => {

    expect(ShallowRender(
      <Table rowCount="3">
        <Column name="ColName1" cell={idx => "col_1_" + idx} />
        <Column name="ColName2" cell={idx => "col_2_" + idx} />
      </Table>
    )).toIncludeJSX(
      <tbody>
        <tr>
          <td>col_1_0</td>
          <td>col_2_0</td>
        </tr>
        <tr>
          <td>col_1_1</td>
          <td>col_2_1</td>
        </tr>
        <tr>
          <td>col_1_2</td>
          <td>col_2_2</td>
        </tr>
      </tbody>
    );
  })
});
