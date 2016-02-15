var template = require('jade!./listitem-template.jade');

export default () => {
    return {
        restrict: 'E',
        scope: {
            data: '='
        },
        bindToController: true,
        template: template(),
        controller() {},
        controllerAs: '$ctrl'
    }
}
