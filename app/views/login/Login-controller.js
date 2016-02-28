class LoginController {

  constructor(Auth, $http, $window, $scope, $state, babelotApi) {
    this.$window = $window;
    this.$http = $http;
    
    /* Google login specific function, google expects this to be gloabl */
    window.onSignIn = (googleUser) => {
      var profile = googleUser.getBasicProfile();
      var id_token = googleUser.getAuthResponse().id_token;

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
