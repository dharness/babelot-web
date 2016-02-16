export default class {

    constructor(){
      this.messageToSend = '';
      this.messages = []
      _.times(150, ()=>{
          this.messages.push('chance.paragraph()')
      })
    }

    sendMessage() {
        alert(this.messageToSend)
    }
}
