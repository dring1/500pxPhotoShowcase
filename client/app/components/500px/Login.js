import React from 'react';
import mui from 'material-ui';
require('../../util/500px-js-sdk/500px');

let RaisedButton = mui.RaisedButton;

class Login extends React . Component {

  constructor(props){
    super(props);
  }

  render() {
    var component;
    console.log(this.props);
    if (this.props.auth) {
      component = <RaisedButton label="Logout" primary={true} onClick={this.handleLogoutClick.bind(this)}/>
    } else {
      component = <RaisedButton label="Login" secondary={true} onClick={this.handleLoginClick.bind(this)}/>
    }
    return (<span className="login-btn"> {component} </span>);
  }

  handleLoginClick() {
    let that = this;
    _500px.login(function (status) {
      if (status == 'authorized') {
          that.props.childCallback(true);
      } else {
          that.props.childCallback(false);
      }
    });
  }

  handleLogoutClick(){
    this.props.childCallback(false);
  }

  init() {
    _500px.init({sdk_key: 'ce2f3b466c4b8705a6f6c75ff5ee91b7f2d33cc6'});
  }

  componentDidMount(){
    this.init();
  }

  static propTypes = {
    childCallback: React.PropTypes.func,
    auth: React.PropTypes.bool,
  }
}
export default Login;
