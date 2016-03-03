var template = require('jade!./listitem-template.jade');
import ListItemController from './listitem-controller.js'

export default () => {
    return {
        restrict: 'E',
        scope: {
            data: '='
        },
        bindToController: true,
        template: template(),
        controller: ListItemController,
        controllerAs: '$ctrl'
    }
}
