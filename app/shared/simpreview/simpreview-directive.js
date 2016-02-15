var template = require('jade!./simpreview-template.jade');

export default () => {
  return {
    restrict: 'E',
      scope: {},
      bindToController: true,
      template: template(),
      controller(){},
      controllerAs: 'simPreviewCtrl'
  }
}
