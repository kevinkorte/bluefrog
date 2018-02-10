import { Meteor } from 'meteor/meteor';
import { Bitcoin_Prices } from '../bitcoin_prices';

Meteor.publish('bitcoin_prices', () => {
  return Bitcoin_Prices.find();
});