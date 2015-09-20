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
    CardText = mui.CardTest;

class Image extends React . Component {
  constructor( props ) {
    super( props );
  }
  render() {
    // console.log(this.props.metadata)
    return (
    <div>
      <FlatButton className="likeButton" label="Action1"/>
      <Card initiallyExpanded={false}>
        <CardHeader
          subtitle={this.props.metadata.user.username}
          avatar={this.props.metadata.user.userpic_url}
          />
        <CardMedia
          overlay={<CardTitle onClick={this.handleLike.bind(this, this.props.metadata.id)}
            title={this.props.metadata.name}
            subtitle={<FlatButton label="Action1"/>}/>}>
          <img src={this.props.metadata.image_url}/>
        </CardMedia>
      </Card>
    </div>
    )
  }


  loadImage(){
  }

  handleLike(imageId){
    console.log(imageId);
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
  }
}

export default Image;
