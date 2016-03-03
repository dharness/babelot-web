class ListItemController {

    constructor(Restangular, Auth, ContactsService){
      this.Restangular = Restangular;
      this.Auth = Auth;
      this.ContactsService = ContactsService;
    }

    removeContact(emailToRemove) {
      var user = this.Auth.getCurrentUser();
      user.customDELETE(`connection`, {connectionEmail: emailToRemove, connectionId: user.id})
          .then(isDeleted => {
            if(isDeleted > 0) {
              this.ContactsService.remove(emailToRemove);
            }
          })
    }
}

export default ListItemController
