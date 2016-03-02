var faker = require('faker');
var swal = require('sweetalert');


class MessagingController {

  constructor(user, Restangular) {
    this.user = user;
    this.guests = [];
    this.team = [];

    user.getList('connection').then(res => {
      res.forEach(e => {
        this.guests.push({
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
        return false
      }
      swal("Nice!", `${inputValue} added to contacts!`, "success");
    });
  }
}


export default MessagingController
