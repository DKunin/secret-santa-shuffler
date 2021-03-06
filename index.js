'use strict';

var _ = require('lodash');
  
var secretSantaShuffle = function(people){
var picks = {};

var convertToNumberIfNotString = function(item) {
  var integ = parseInt(item);
  return _.isNaN(integ)?item:integ;
};

do {
  var receivers = _.clone(people);
  for (var i in people) {
    var s = people[i];
    var r = null;

    do {
    
      if ( receivers.length === 1 && receivers[0] === s) {
        break;
      }
      
      var j = _.random(0, receivers.length - 1);
      if (s !== receivers[j]) {
        r = receivers[j];
        receivers.splice(j, 1);
      }    
    } while(r === null);
  
    // we have a match
    if ( r !== null) {
      picks[s] = r;
    }
  }

} while (_.keys(picks).length < people.length); 
  var outputArray = [];
  // output the answers
  for (var sender in picks) {
    outputArray.push([convertToNumberIfNotString(sender),picks[sender]]);
  }
  return outputArray;
};

module.exports = secretSantaShuffle;

