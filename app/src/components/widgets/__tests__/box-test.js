jest.unmock('../box');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expectJSX from 'jasmine-expect-jsx';
import {Box, BoxTool} from '../box'

function boxTextByClass(render, clazz, expect) {
  const box = TestUtils.renderIntoDocument(
    render
  );
  var boxNode = ReactDOM.findDOMNode(box);
  var body = TestUtils.findRenderedDOMComponentWithClass(box, clazz)
  return body.textContent
}

function nodeToString ( node ) {
   var tmpNode = document.createElement( "div" );
   tmpNode.appendChild( node.cloneNode( true ) );
   var str = tmpNode.innerHTML;
   tmpNode = node = null; // prevent memory leaks in IE
   return str;
}

describe('Box', () => {
  it('Render the message', () => {
    expect(boxTextByClass(<Box content="the message"/>,
      'box-body'
    )).toEqual('the message')
  })

  it('Prints the title', () => {
    expect(boxTextByClass(<Box title="the title"/>,
      'box-title'
    )).toEqual(' the title')
  })

  it('Prints the footer', () => {
    expect(boxTextByClass(<Box footer="the footer"/>,
      'box-footer'
    )).toEqual('the footer')
  })

  it('Prints the spin loader', () => {
    expect(boxTextByClass(<Box loading={true}/>,
      'overlay'
    )).toEqual('')
  })

  it('Creates a collapsed box', () => {
    const box = TestUtils.renderIntoDocument(
      <Box collapsed={true}/>
    );
    var boxNode = ReactDOM.findDOMNode(box);
    expect(boxNode.className).toContain('collapsed-box')
  })

  it('Creates a non-collapsed box', () => {
    const box = TestUtils.renderIntoDocument(
      <Box />
    );
    var boxNode = ReactDOM.findDOMNode(box);
    expect(boxNode.className).not.toContain('collapsed-box')
  })

  it('Creates a tool box', () => {
    let renderer = TestUtils.createRenderer();
    renderer.render(<Box boxTools={['expand']}/>);
    let actualElement = renderer.getRenderOutput();
    let expectedElement = (<div className="box box-default box-solid color-palette-box ">
      <div className="box-header with-border">
        <h3 className="box-title">Default title</h3>
        <div className="box-tools pull-right">
          <BoxTool toolType="expand" />
        </div>
      </div>
      <div className="box-body" />
    </div>);
    expect(actualElement).toIncludeJSX(expectedElement);
  })

  it('Creates all tool boxes', () => {
    let renderer = TestUtils.createRenderer();
    renderer.render(<Box boxTools={['expand', 'collapse', 'remove']}/>);
    let actualElement = renderer.getRenderOutput();
    expect(actualElement).toIncludeJSX(
      <div className="box-tools pull-right">
          <BoxTool toolType="expand" />
          <BoxTool toolType="collapse" />
          <BoxTool toolType="remove" />
      </div>);
  })

});
