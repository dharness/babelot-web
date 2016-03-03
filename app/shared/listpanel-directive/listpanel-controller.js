export default class {

    constructor($scope) {
        this.guests = $scope.$ctrl.guests;
        this.team = $scope.$ctrl.team;
        // Default to showing the guests
        this.contactsToShow = this.guests;

        $scope.$watch(()=> $scope.$ctrl.guests,
        (newVal, oldVal)=> {
          this.contactsToShow = newVal;
        })
    }

    // Used to toggle display between guests and team
    setContactsType(contactType) {
        this.contactsToShow = this[contactType]
    }
}
