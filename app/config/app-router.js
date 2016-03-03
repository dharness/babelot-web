import MessagingController from '../views/messaging/Messaging-controller.js';
import LoginController from '../views/login/Login-controller.js';


var messagingTemplate = require('jade!../views/messaging/messaging.jade');
var loginTemplate = require('jade!../views/login/login.jade');

export default ($stateProvider, $urlRouterProvider) => {

    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/login");
    // Now set up the states
    $stateProvider
      .state('messaging', {
        url: "/messaging",
        template: messagingTemplate(),
        controller: MessagingController,
        controllerAs: 'msgingCtrl',
        resolve: {
          user: (Restangular, Auth) => {
            return Restangular.one('user', 'login').post()
                .then(user => Auth.setCurrentUser(user));
          }
        }
      })
      .state('login', {
        url: "/login",
        template: loginTemplate(),
        controller: LoginController,
        controllerAs: 'loginCtrl'
      });
}
