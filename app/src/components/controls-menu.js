import React from 'react';

export default class ControlsMenu extends React.Component {
    componentDidMount() {

    },
    render() {
        var that = this;
        return (
            <aside className="control-sidebar control-sidebar-dark control-sidebar-open">
                {/* Create the tabs */}
                {/* Tab panes */}
                <div className="tab-content">
                    {/* Home tab content */}
                    <div className="tab-pane" id="control-sidebar-home-tab">
                        {/* /.control-sidebar-menu */}

                        {/* /.control-sidebar-menu */}

                    </div>
                    <div id="control-sidebar-theme-demo-options-tab" className="tab-pane active">
                    </div>
                    {/* /.tab-pane */}
                    {/* Stats tab content */}
                    <div className="tab-pane" id="control-sidebar-stats-tab">Stats Tab Content</div>
                    {/* /.tab-pane */}
                    {/* Settings tab content */}
                    <div className="tab-pane" id="control-sidebar-settings-tab">
                    </div>
                    {/* /.tab-pane */}
                </div>
            </aside>
        )
    }
}
