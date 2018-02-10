import { Meteor } from 'meteor/meteor';

import { Bitcoin_Prices } from './bitcoin_prices.js';

Meteor.methods({
  getCurrentBitcoinPrice() {
    let call = HTTP.call('GET', 'https://api.coindesk.com/v1/bpi/currentprice.json');
    if ( call.statusCode == 200 ) {
      console.log(call.content);
      Bitcoin_Prices.insert({
        updated: call.content.time.updated,
        updatedISO: call.content.time.updatedISO,
        priceUSD: call.content.bpi.USD.rate,
        priceUSDFloat: call.content.bpi.USD.rate_float
      }, (error, result) => {
        if ( error ) {
          console.log(error.reason)
        } else {
          console.log('inserted', result);
        }
      });
    }
  }
})