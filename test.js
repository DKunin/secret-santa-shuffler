'use strict';

var test      = require('ava');
var randomize = require('./');

test('Pairs in array should not match',function (t) { 
  var shuf = randomize([1,2,3]);
  shuf.forEach(function(item){
    t.assert(item[0]!==item[1]);
  });
  t.end();
});

test('Should work with strings',function (t) { 
  var shuf = randomize(['some@mail.com','other@mail.ru','third@mail.se']);
  shuf.forEach(function(item){
    t.assert(item[0]!==item[1]);
  });
  t.end();
});


