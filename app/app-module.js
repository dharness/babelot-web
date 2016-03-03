import router from './config/app-router'
import MessagingController from './views/messaging/Messaging-controller.js'
import LoginController from './views/login/Login-controller.js'
import listpanel from './shared/listpanel-directive/listpanel-directive.js'
import listitem from './shared/listpanel-directive/listitem-directive/listitem-directive.js'
import chatpanel from './shared/chatpanel-directive/chatpanel-directive.js'
import chatcard from './shared/chatcard/chatcard-directive.js'
import simpreview from './shared/simpreview/simpreview-directive.js'
import simsearchpanel from './shared/simsearchpanel/simsearchpanel-directive.js'
import ImService from './shared/IM-Service.js'
import Auth from './shared/auth/auth.js'
import ContactsService from './shared/contacts/contacts-service.js'
import httpInterceptor from './config/httpInterceptor.js'
import restangularProvider from './config/restangularProvider.js'


var styles = require('./styles/main.sass')

angular.module('babelot', ['ui.router', 'angular.filter', 'luegg.directives', 'restangular'])
  .value('jwt', {})
  .config(router)
  .config(httpInterceptor)
  .config(restangularProvider)
  // This is currently our docker containers IP, make sure that's running
  .constant('babelotApi', 'https://192.168.99.100')
  .controller('MessagingController', MessagingController)
  .controller('LoginController', LoginController)
  .directive('listPanel', listpanel)
  .directive('listItem', listitem)
  .directive('chatPanel', chatpanel)
  .directive('chatCard', chatcard)
  .directive('simPreview', simpreview)
  .directive('simSearchPanel', simsearchpanel)
  .service('ImService', ImService)
  .service('Auth', Auth)
  .service('ContactsService', ContactsService);
