
class Auth {
  static authenticated(){
    _500px.getAuthorizationStatus(function (status) {
    if (status == 'not_logged_in' || status == 'not_authorized') {
        _500px.login();
    }
  });
  }
}

export default Auth;