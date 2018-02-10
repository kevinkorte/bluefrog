import { HTTP } from 'meteor/http'

SyncedCron.add({
  name: 'Adding a data point for the homepage',
  schedule: function(parser) {
    // parser is a later.parse object
    return parser.text('every 1 minute');
  },
  job: function() {
    Meteor.call('getCurrentBitcoinPrice');
    return;
  }
});

SyncedCron.start();