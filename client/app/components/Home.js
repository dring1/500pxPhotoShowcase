import React from 'react';
import { Link } from 'react-router';
import mui from 'material-ui';
import FiveHundredPxList from './500px/List';
import Login from './500px/Login';
let RaisedButton = mui.RaisedButton;

class Home extends React . Component {
  constructor(){
    super();
    this.state = {
      auth: false
    }
  }
  render() {
    return (
      <div>
        <Login childCallback={this.loginCallback()} auth={this.state.auth}/>
        <FiveHundredPxList auth={this.state.auth}/>
      </div>);
  }

  handleClick() {
    var router = this.context.router;

  }

  loginCallback(status){
    var that = this;
    return (status) => {
      that.setState({auth: status});
    }
  }

  static contextTypes = {
    router: React.PropTypes.func.isRequired
  }
}

export default Home;
