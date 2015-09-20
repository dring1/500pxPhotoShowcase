import React from 'react';
import mui from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { RouteHandler } from 'react-router';
const ThemeManager = new mui.Styles.ThemeManager();


injectTapEventPlugin();

class Main extends React . Component {
  render() {
    return (
    <div>
      <RouteHandler {...this.props} />
    </div>
    )
  }
  // Move this to playing route
  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme(),
    };
  }
  static childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
  }
}

export default Main;
