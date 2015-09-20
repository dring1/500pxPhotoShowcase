import React from 'react';
import mui from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';
let Auth = require('../../util/auth');

const ThemeManager = new mui.Styles.ThemeManager();

let Card = mui.Card,
    CardHeader = mui.CardHeader,
    Avatar = mui.Avatar,
    CardMedia = mui.CardMedia,
    CardTitle = mui.CardTitle,
    CardActions = mui.CardActions,
    FlatButton = mui.FlatButton,
    CardText = mui.CardTest,
    FloatingActionButton = mui.FloatingActionButton;

class Image extends React . Component {
  constructor( props ) {
    super( props );
    this.state = {
      liked: false,
    }
  }
  render() {
    // console.log(this.props.metadata)
    return (
    <div>
      <Card initiallyExpanded={false}>
        <CardHeader
          subtitle={this.props.metadata.user.username}
          avatar={this.props.metadata.user.userpic_url}
          />
        <CardMedia overlay={<CardTitle title={this.props.metadata.name}  subtitle={this.favBtn()} />} >
            <img src={this.props.metadata.image_url}/>
        </CardMedia>
      </Card>
    </div>
    )
  }


  loadImage(){
  }

  favBtn() {
    console.log(this.props.auth)
    if (this.state.liked === false && this.props.auth) {
      return (<span>
        <FloatingActionButton iconClassName="fa fa-star" mini={true} onClick={this.handleLike.bind(this, this.props.metadata.id)} />
        </span>)
    };
  }

  handleLike(imageId){
    // console.log(imageId);
    let that = this;
    _500px.api(`/photos/${imageId}/vote`, 'post', { vote: '1' }, function (response) {
      console.log(that)
      that.setState({liked: true})
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
    metadata: React.PropTypes.object.isRequired,
    auth: React.PropTypes.bool.isRequired,
  }
}

export default Image;
