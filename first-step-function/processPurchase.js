'use strict';

console.log('Loading function');

module.exports.handler = async (event) => {
  console.log( "Recieved message from Step Function")
  console.log(event)
  let response = {}
  response['TransactionType']=event['TransactionType']
  response['Timestamp']=Date.now()
  response['Message']="Hello from lambda land inside the ProcessPurchase function"

  return response;

};
