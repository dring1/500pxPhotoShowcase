import React from 'react';
import mui from 'material-ui';
require('../../util/500px-js-sdk/500px');

let RaisedButton = mui.RaisedButton;

class Login extends React . Component {
  render() {
    return ( <div>
      <RaisedButton label="Login" secondary={true} onClick={this.handleClick.bind(this)}/></div>);
  }

  handleClick() {
    _500px.login(function (status) {
      console.log('LOGGED IN')
      if (status == 'authorized') {
          alert('You have logged in');
          _500px.api('/users', function (response) {
              // .......
          });
      } else {
          alert('You denied my application');
      }
    });
  }

  init() {
    window._500px.init({sdk_key: 'ce2f3b466c4b8705a6f6c75ff5ee91b7f2d33cc6'});
  }

  componentDidMount(){
    this.init();
  }
}
export default Login;
