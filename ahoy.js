var twilio = require('twilio');
var key = require('./key/config.json');
var TWILIO_ACCOUNT_SID = key.ACCOUNT_SID;
var TWILIO_AUTH_TOKEN = key.ACCOUNT_TOKEN;
var number = key.PHONE_NUMBER;
var client = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

client.sendSms({
  to: "+13233653082",
  from: number,
  body: "Hey there good looking!"
}, function(error, message){
    if(!error){
      console.log('Success!');
      console.log(message.sid);

      console.log('Message sent on: ', message.dateCreated);
    } else {
      console.log(error);
      console.log('Oops, there was an error!');
    }
});