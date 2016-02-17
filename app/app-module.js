import router from './config/app-router'
import MessagingController from './views/messaging/messaging-controller.js'
import listpanel from './shared/listpanel-directive/listpanel-directive.js'
import listitem from './shared/listpanel-directive/listitem-directive/listitem-directive.js'
import chatpanel from './shared/chatpanel-directive/chatpanel-directive.js'
import chatcard from './shared/chatcard/chatcard-directive.js'
import simpreview from './shared/simpreview/simpreview-directive.js'
import simsearchpanel from './shared/simsearchpanel/simsearchpanel-directive.js'
var styles = require('./styles/main.sass')

angular.module('babelot', ['ui.router', 'angular.filter', 'luegg.directives'])
  .config(router)
  .controller('MessagingController', MessagingController)
  .directive('listPanel', listpanel)
  .directive('listItem', listitem)
  .directive('chatPanel', chatpanel)
  .directive('chatCard', chatcard)
  .directive('simPreview', simpreview)
  .directive('simSearchPanel', simsearchpanel);
