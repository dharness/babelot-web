var template = require('jade!./chatcard-template.jade');

export default () => {
  return {
    restrict: 'E',
      scope: {message: '='},
      bindToController: true,
      template: template(),
      controller(){},
      controllerAs: 'chatCardCtrl'
  }
}
