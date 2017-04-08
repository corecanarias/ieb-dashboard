import React from 'react';

const COLOR_RED = 0
const COLOR_YELLOW = 1
const COLOR_AQUA = 2
const COLOR_BLUE = 3
const COLOR_LIGHT_BLUE = 4
const COLOR_GREEN = 5
const COLOR_NAVY = 6
const COLOR_TEAL = 7
const COLOR_OLIVE = 8
const COLOR_LIME = 9
const COLOR_ORANGE = 10
const COLOR_FUCHSIA = 11
const COLOR_PURPLE = 12
const COLOR_MAROON = 13
const COLOR_BLACK = 14

const BG_COLORS = [
  'bg-red',
  'bg-yellow',
  'bg-aqua',
  'bg-blue',
  'bg-light-blue',
  'bg-green',
  'bg-navy',
  'bg-teal',
  'bg-olive',
  'bg-lime',
  'bg-orange',
  'bg-fuchsia',
  'bg-purple',
  'bg-maroon',
  'bg-black']

const BG_COLORS_ACTIVE = [
  'bg-red-active',
  'bg-yellow-active',
  'bg-aqua-active',
  'bg-blue-active',
  'bg-light-blue-active',
  'bg-green-active',
  'bg-navy-active',
  'bg-teal-active',
  'bg-olive-active',
  'bg-lime-active',
  'bg-orange-active',
  'bg-fuchsia-active',
  'bg-purple-active',
  'bg-maroon-active',
  'bg-black-active'
]

export default class InfoBox extends React.Component {

  render() {
    var bgBox = ''
    var bgIcon = BG_COLORS[this.props.color]
    var progress = ''
    if(this.props.progress) {
      bgBox = BG_COLORS[this.props.color]
      bgIcon = ''
      progress = (
        <div className="progress">
          <div className="progress-bar" style={{width: this.props.progress + '%'}}></div>
        </div>
      )
    }
    return (<div className={"info-box " + bgBox}>
               <span className={"info-box-icon " + bgIcon}><i className={"fa fa-" + this.props.icon}></i></span>
               <div className="info-box-content">
                  <span className="info-box-text">{this.props.text}</span>
                  <span className="info-box-number">{this.props.number}</span>
                  {progress}
                  <span className="progress-description">{this.props.description}</span>
               </div>
            </div>)
  }
}
