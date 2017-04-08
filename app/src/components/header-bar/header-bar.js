import React from 'react';
import HeaderMessages from './header-messages'
import HeaderNotifications from './header-notifications'
import HeaderTasks from './header-tasks'

export default class HeaderBar extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
          messages: [],
          notifications: [],
          tasks: []
      }
    }

    pushMenu() {
        var body = document.body;
        if(body.clientWidth > 768) {
            if(body.className.indexOf('sidebar-collapse') === -1) {
                body.className += ' sidebar-collapse';
            } else {
                body.className = body.className.replace(' sidebar-collapse', '');
            }
        } else {
            if (body.className.indexOf('sidebar-open') === -1) {
                body.className += ' sidebar-open';
            } else {
                body.className = body.className.replace(' sidebar-open','');
            }
        }
    }
    componentDidMount() {
        var messages = [];

        var notifications = [];

        var tasks = [];

        this.setState({
            messages: messages,
            notifications: notifications,
            tasks: tasks
        });
    }
    render() {
        var that = this;
        return (
            <header className="main-header">
                {/* Logo */}
                <a href="index2.html" className="logo">
                    {/* mini logo for sidebar mini 50x50 pixels */}
                    <span className="logo-mini"><b>A</b>LT</span>
                    {/* logo for regular state and mobile devices */}
                    <span className="logo-lg"><b>Admin</b>LTE</span>
                </a>
                {/* Header Navbar: style can be found in header.less */}
                <nav className="navbar navbar-static-top" role="navigation">
                    {/* Sidebar toggle button*/}
                    <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button" onClick={that.pushMenu}>
                        <span className="sr-only">Toggle navigation</span>
                    </a>
                    <div className="navbar-custom-menu">
                        <ul className="nav navbar-nav">
                            {/* Messages: style can be found in dropdown.less*/}
                            <li className="dropdown messages-menu">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="fa fa-envelope-o"></i>
                                    <span className="label label-success">{that.state.messages.length}</span>
                                </a>
                                <HeaderMessages messages={that.state.messages} />
                            </li>
                            {/* Notifications: style can be found in dropdown.less */}
                            <li className="dropdown notifications-menu">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="fa fa-bell-o"></i>
                                    <span className="label label-warning">{that.state.notifications.length}</span>
                                </a>
                                <HeaderNotifications notifications={that.state.notifications} />
                            </li>
                            {/* Tasks: style can be found in dropdown.less */}
                            <li className="dropdown tasks-menu">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="fa fa-flag-o"></i>
                                    <span className="label label-danger">{that.state.notifications.length}</span>
                                </a>
                                <HeaderTasks tasks={that.state.tasks} />
                            </li>
                            {/* User Account: style can be found in dropdown.less */}
                            { /* ontrol Sidebar Toggle Button */}
                            <li>

                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
};
