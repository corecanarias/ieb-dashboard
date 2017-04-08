import React from 'react';

class BoxTool extends React.Component {

  findClosestElement(element, className) {
      var regex = new RegExp("(^|\\s)"+className+"(\\s|$)", "gi")
      while (!regex.test(element.className)) {
          // Increment the loop to the parent node
          element = element.parentNode;
          if (!element) {
              return null;
          }
      }
      // At this point, the while loop has stopped and `element` represents the element that has
      // the class you specified in the second parameter of the function `clazz`

      // Then return the matched element
      return element;
  }

  toggleBoxCollapse(box, boxBody, icon) {
      if(box.className.indexOf('collapsed-box') !== -1) {
          icon.className = icon.className.replace(/fa-plus/g, 'fa-minus');
          $(boxBody).velocity('slideDown', {
              duration: 500,
              easing: 'easeInSine',
              complete: function() {
                  box.className = box.className.replace(/ collapsed-box/g, '');
              }
          });
          // $(boxBody).slideDown(500, function () {
          //     box.className = box.className.replace(/ collapsed-box/g, '');
          // });
      } else {
          icon.className = icon.className.replace(/fa-minus/g, 'fa-plus');
          $(boxBody).velocity('slideUp', {
              duration: 500,
              easing: 'easeInSine',
              complete: function() {
                  box.className += ' collapsed-box';
              }
          });
          // $(boxBody).slideUp(500, function () {
          //     box.className += ' collapsed-box';
          // });
      }
  }

  removeBox(box) {
      $(box).velocity('slideUp', {
          duration: 500,
          easing: 'easeInSine'
      });
  }

  toggleCollapse(event) {

      var box = this.findClosestElement(event.currentTarget, 'box'),
          boxBody = box.children[1],
          icon = event.currentTarget.children[0];

      this.toggleBoxCollapse(box, boxBody, icon);

  }

  removeBox(event) {
      var box = this.findClosestElement(event.currentTarget, 'box');
      this.removeBox(box);
  }

  render() {
    var button = '', that = this;

    switch(this.props.toolType) {
      case 'expand':
          return (
              <button className="btn btn-box-tool" data-widget="expand" onClick={(evt) => that.toggleCollapse}><i className="fa fa-plus"></i></button>
          )
      case 'collapse':
        return (
          <button className="btn btn-box-tool" data-widget="collapse" onClick={(evt) => this.toggleCollapse(evt)}><i className="fa fa-minus"></i></button>
        )
      case 'remove':
        return (
          <button className="btn btn-box-tool" data-widget="remove" onClick={that.removeBox}><i className="fa fa-times"></i></button>
        )
    }
  }
}

class Box extends React.Component {

  render() {
      var boxType = '', borderClass = '', boxToolsContainer, boxTools = [], loadingState, footer;

      if(this.props.border === true){
          borderClass = 'box-solid';
      }

      if(this.props.boxTools) {

          this.props.boxTools.map(function(tool, index) {
              boxTools.push(<BoxTool key={index} toolType={tool} />)
          });

          boxToolsContainer = <div className="box-tools pull-right">{boxTools}</div>
      }

      if(this.props.loading === true) {
          loadingState =
              <div className="overlay">
                  <i className="fa fa-refresh fa-spin"></i>
              </div>
      }

      if(this.props.collapsed) {
          boxType = "collapsed-box"
      }

      if(this.props.footer) {
          footer = <div className="box-footer">{this.props.footer}</div>
      }

      return (
            <div className={"box "+this.props.theme+" "+borderClass+ " color-palette-box "+boxType}>
                <div className="box-header with-border">
                    <h3 className="box-title">{this.props.headerMarkup} {this.props.title}</h3>
                    {boxToolsContainer}
                </div>
                <div className="box-body">
                    {this.props.content}
                    {this.props.children}
                </div>

                {footer}
                {/* /.box-body */}
                {loadingState}
            </div>
      )
  }
}

Box.defaultProps = {
    collapsed: false,
    theme: 'box-default',
    loading: false,
    border: true,
    title: 'Default title',
    content: '',
};


module.exports = {Box, BoxTool}
