var faker = require('faker')


export default class {

    constructor(){
      this.messageToSend = '';
      this.messages = []
      _.times(150, (i)=>{
          this.messages.push({
            text: faker.Lorem.paragraph(),
            sent: (i%2)==0
          })
      })
    }

    sendMessage() {
        alert(this.messageToSend)
    }
}
