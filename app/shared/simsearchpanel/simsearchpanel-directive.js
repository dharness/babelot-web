var template = require('jade!./simsearchpanel-template.jade');

export default () => {
  return {
    restrict: 'E',
      scope: {},
      bindToController: true,
      template: template(),
      controller(){
        this.simSearchTerms = '';
        this.sims = [];
        _.times(50, ()=>{
          this.sims.push({
            img: 'http://placehold.it/100x100',
            name: chance.name()
          })
        })
      },
      controllerAs: 'simSearchPanelCtrl'
  }
}
