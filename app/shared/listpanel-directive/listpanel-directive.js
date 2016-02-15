import ListPanelController from './listpanel-controller.js'


var template = require('jade!./listpanel-template.jade');

export default () => {
  return {
    restrict: 'E',
      scope: {
        guests: '=',
        team: '='
      },
      bindToController: true,
      template: template(),
      controller: ListPanelController,
      controllerAs: '$ctrl'
  }
}
