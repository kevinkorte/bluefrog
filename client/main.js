import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import { Bitcoin_Prices } from '../imports/api/bitcoin_price/bitcoin_prices';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
  Meteor.subscribe('bitcoin_prices');
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
  price() {
    return Bitcoin_Prices.find();
  }
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
