import React from 'react';
import mui from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';
import FhxHelper from './Util';
import Image from './Image'

const ThemeManager = new mui.Styles.ThemeManager();


class List extends React . Component {
  constructor( props ) {
    super( props );
    this.state = {
      images: []
    };
  }
  render() {
      var list = this.state.images.map( (image, index) => {
          var component;
          component = <Image key={index} metadata={image}/>;
          return (component)
      } );
      return (
        <div>{list}</div>
      )
  }

  componentDidMount(){
    FhxHelper
      .getPopular()
      .then( res => {
        console.log(res)
        this.setState({images: res.data})
    });
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  static childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
  }

  static propTypes = {

  }
}

export default List;
