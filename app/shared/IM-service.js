class ImService {

  constructor($http, babelotApi, jwt) {
    this.$http = $http;
    this.babelotApi = babelotApi;
  }

  connect() {
    return this.$http({
      method: 'GET',
      url: `${this.babelotApi}/token/twilio?device=browser`
    })
    .then((res)=>{
      this.username = res.data.identity;
      // Initialize the IP messaging client
      var accessManager = new Twilio.AccessManager(res.data.token);

      var messagingClient = new Twilio.IPMessaging.Client(accessManager);
      return messagingClient.getChannelByUniqueName('general')
        .then((channel)=> {
          var generalChannel = channel;
          if (!generalChannel) {
              // If it doesn't exist, let's create it
              messagingClient.createChannel({
                  uniqueName: 'general',
                  friendlyName: 'General Chat Channel'
              }).then(function(channel) {
                  console.log('Created general channel:');
                  console.log(channel);
                  generalChannel = channel;
                  setupChannel();
              });
          } else {
              console.log('Found general channel:');
              console.log(generalChannel);
              this.generalChannel = generalChannel;
              return generalChannel.join().then(()=> {
                document.getElementById("loading").style.visibility = "hidden";
              })
          }
        })
    })
  }

  sendMessage(message) {
    this.generalChannel.sendMessage(message)
  }

}

export default ImService
