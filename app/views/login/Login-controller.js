class LoginController {

  constructor(Auth, $http) {

    this.$http = $http;

    /* Google login specific function, google expects this to be gloabl */
    window.onSignIn = (googleUser) => {
      var profile = googleUser.getBasicProfile();
      var id_token = googleUser.getAuthResponse().id_token;


      // this.$http({
      //   method: 'POST',
      //   url: 'https:localhost:3443/googletoken',
      //   data: {
      //     token: id_token
      //   }
      // })

      var xhr = new XMLHttpRequest();
      xhr.open('POST', 'https:localhost:3443/googletoken');
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.onload = function() {
        console.log('Signed in as: ' + xhr.responseText);
      };
      xhr.send('idtoken=' + id_token);

      console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
      console.log('Name: ' + profile.getName());
      console.log('Image URL: ' + profile.getImageUrl());
      console.log('Email: ' + profile.getEmail());
    }
  }

  signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function() {
      console.log('User signed out.');
    });
  }

}

export default LoginController
