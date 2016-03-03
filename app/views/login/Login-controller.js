class LoginController {

  constructor(Auth, $http, $window, $scope, $state, babelotApi, jwt) {
    this.$window = $window;
    this.$http = $http;
    this.jwt = jwt;
    this.Auth = Auth;

    /* Google login specific function, google expects this to be gloabl */
    window.onSignIn = (googleUser) => {
      this.jwt.id_token = googleUser.getAuthResponse().id_token;
      sessionStorage.email = googleUser.getBasicProfile().getEmail();
      sessionStorage.id_token = this.jwt.id_token;
      $state.go('messaging');
    }

    window.signOut = () => {
      var auth2 = gapi.auth2.getAuthInstance();
      auth2.signOut().then(function() {
        console.log('User signed out.');
      });
    }
  }

}

export default LoginController
