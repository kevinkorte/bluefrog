import { Mongo } from 'meteor/mongo';

import SimpleSchema from 'simpl-schema';

export const Bitcoin_Prices = new Mongo.Collection('bitcoin_prices');

BitcoinSchema = new SimpleSchema({
  updated: String,
  updatedISO: String,
  priceUSD: String,
  priceUSDFloat: Number,
  createdAt: {
    type: Date,
    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date()};
      } else {
        this.unset();  // Prevent user from supplying their own value
      }
    }
  }
});

Bitcoin_Prices.attachSchema( BitcoinSchema );

