import MessagingController from '../views/messaging/Messaging-controller.js';


var template = require('jade!../views/messaging/messaging.jade');

export default ($stateProvider, $urlRouterProvider) => {

    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/messaging");
    //
    // Now set up the states
    $stateProvider
      .state('messaging', {
        url: "/messaging",
        template: template(),
        controller: MessagingController,
        controllerAs: 'msgingCtrl'
      })
}
