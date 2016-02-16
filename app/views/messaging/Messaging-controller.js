var faker = require('faker')

class MessagingController {

  constructor() {
    // Genereate some random users for now
    // TODO: Remove this and replace it with something RESTful
    this.guests = []
    this.team = []
    
    _.times(15, () => {
      this.guests.push({
        name: faker.Name.findName(),
        phone: faker.PhoneNumber.phoneNumber(),
        img: 'http://placehold.it/55x55'
      })
    });
    this.team.push({
      name: 'Dusty Panson',
      role: 'Maintenance',
      img: 'http://placehold.it/55x55'
    });
  }
}

export default MessagingController
