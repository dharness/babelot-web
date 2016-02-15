var template = require('jade!./chatcard-template.jade');

export default () => {
  return {
    restrict: 'E',
      scope: {},
      bindToController: true,
      template: template(),
      controller(){},
      controllerAs: 'chatCardCtrl'
  }
}
