import React from 'react';
import mui from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';

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
    console.log(this.props.metadata)
    return (
    <div>
      <Card initiallyExpanded={false}>
        <CardHeader
          title={this.props.metadata.name}
          subtitle={this.props.metadata.user.username}
          avatar={this.props.metadata.user.userpic_url}
          />
        <CardMedia >
          <img src={this.props.metadata.image_url}/>
        </CardMedia>
      </Card>
    </div>
    )
  }


  loadImage(){
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
