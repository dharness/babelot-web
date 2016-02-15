export default class {

    constructor($scope){
        this.guests = $scope.$ctrl.guests;
        this.team = $scope.$ctrl.team;
        // Default to showing the guests
        this.contactsToShow = this.guests;
    }

    // Used to toggle display between guests and team
    setContactsType(contactType) {
        this.contactsToShow = this[contactType]
    }
}
