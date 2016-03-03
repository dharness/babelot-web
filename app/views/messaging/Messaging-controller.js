var faker = require('faker');
var swal = require('sweetalert');
var co = require('co');


class MessagingController {

  constructor(user, Restangular, $scope, ContactsService) {
    this.user = user;
    this.Restangular = Restangular;
    this.guests = [];
    this.team = [];
    this.$scope = $scope;
    this.ContactsService = ContactsService;

    user.getList('connection')
    .then(res => {
      ContactsService.contacts = this.guests;
      res.forEach(e => {
        ContactsService.add({
          name: e.email,
          phone: faker.PhoneNumber.phoneNumber(),
          img: 'http://placehold.it/55x55'
        })
      })
    })

    // generates team for left panel
    this.team.push({
      name: 'Dusty Panson',
      role: 'Maintenance',
      img: 'http://placehold.it/55x55'
    });
  }

  addContact() {
    swal({
      title: "Add a contact",
      text: "Enter the contacts email:",
      type: "input",
      showCancelButton: true,
      closeOnConfirm: false,
      inputPlaceholder: "noodle@doodle.com"
    }, (inputValue) => {
      if (inputValue === false) return false;
      if (inputValue === "") {
        swal.showInputError("You need to write something!");
        return false;
      }

      this.user.post('connection', {
          connectionEmail: inputValue
        })
        .then(res => {
          this.guests.length = 0;
          this.ContactsService.add({
            name: res[0].email,
            phone: faker.PhoneNumber.phoneNumber(),
            img: 'http://placehold.it/55x55'
          });

          swal("Nice!", `${inputValue} added to contacts!`, "success");
        })
        .catch(err => swal.showInputError(err.data))
    });
  }
}


export default MessagingController
