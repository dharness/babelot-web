import chance from 'chance'


class MessagingController {

  constructor() {
    // Genereate some random users for now
    // TODO: Remove this and replace it with something RESTful
    this.guests = []
    this.team = []
    _.times(15, () => {
      this.guests.push({
        name: 'chance.name()',
        phone: 'chance.phone()',
        img: 'http://www.talkaboutwork.sg/upload/noimage/avatar.png'
      })
    });
    this.team.push({
      name: 'Dusty Panson',
      role: 'Maintenance',
      img: 'http://www.talkaboutwork.sg/upload/noimage/avatar.png'
    });
  }
}

export default MessagingController
