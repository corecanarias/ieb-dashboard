import React from 'react';
import {render} from 'react-dom';
import HeaderBar from './components/header-bar/header-bar'
import NavigationMenu from './components/navigation-menu'
import {Box} from './components/widgets/box'
import InfoBox from './components/widgets/info-box'
import EnvironmentsList from './components/environments/list-view'


export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
    }
  }

  render () {
    return (
      <div className="wrapper">
        <HeaderBar />
        <NavigationMenu />

        <div className="content-wrapper">
          <section className="content-header">
            <h1>Example<small>Preview page</small></h1>
          </section>
          <section className="content">
            <div className="row">
              <div className="col-md-3 col-sm-6 col-xs-12">
                <InfoBox color="2" text="text" number="1" icon="comments-o" description="Last update late"/>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12">
                <InfoBox color="1" text="text" number="1" icon="comments-o" progress="50" description="50% Progress bar" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <Box title="Environments">
                  <EnvironmentsList />
                </Box>
              </div>
              <div className="col-md-6">
                <Box title="Box title2">

                </Box>
              </div>
            </div>
          </section>
        </div>
        <footer className="main-footer">
          <div className="pull-right hidden-xs">
            <b>Version</b> 1.0.1
          </div>
          <strong>This project is a derivative of <a href="http://almsaeedstudio.com">Almsaeed Studio</a>.</strong>
        </footer>
      </div>
    );
  }
}
