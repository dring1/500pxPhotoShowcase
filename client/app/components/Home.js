import React from 'react';
import { Link } from 'react-router';
import mui from 'material-ui';
import FiveHundredPxList from './500px/List';
import Login from './500px/Login';
let RaisedButton = mui.RaisedButton;

class Home extends React . Component {
  render() {
    return ( <div>
      <Login/>
      <FiveHundredPxList/></div>);
  }

  handleClick() {
    var router = this.context.router;

  }

  static contextTypes = {
    router: React.PropTypes.func.isRequired
  }
}

export default Home;
