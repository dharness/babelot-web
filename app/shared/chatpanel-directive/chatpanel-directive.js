import ChatpanelController from './chatpanel-controller.js'


var template = require('jade!./chatpanel-template.jade');

export default () => {
  return {
    restrict: 'E',
      scope: {},
      bindToController: true,
      template: template(),
      controller: ChatpanelController,
      controllerAs: 'chatPanelCtrl'
  }
}
