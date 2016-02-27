class LoginController {

  constructor(Auth, $http, $window, $scope, $state, babelotApi) {
    this.$window = $window;
    this.$http = $http;
    /* Google login specific function, google expects this to be gloabl */
    window.onSignIn = (googleUser) => {
      var profile = googleUser.getBasicProfile();
      var id_token = googleUser.getAuthResponse().id_token;

      $state.go('messaging');

      // Verify our token was signed by google,
      // and log our user in
      // this.$http({
      //   method: 'POST',
      //   url: `${babelotApi}/user/login`,
      //   headers: {
      //     'Authorization': `Bearer ${id_token}`
      //   }
      // }).then((res) => {
      //   console.log(res.data);
      // }, (err) => {
      //   console.error(err)
      // });
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
