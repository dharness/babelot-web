var faker = require('faker')


export default class {

    constructor($scope, ImService){
      this.messageToSend = '';
      this.messages = [];
      this.ImService = ImService;

      ImService.connect().then((res)=> {
        ImService.generalChannel.on('messageAdded', (message)=> {
          this.messages.push({
            text: message.body,
            sent: message.author === ImService.username
          });
          $scope.$apply();
        })
      });
    }

    sendMessage() {
        this.ImService.sendMessage(this.messageToSend);
        this.messageToSend = '';
    }
}
