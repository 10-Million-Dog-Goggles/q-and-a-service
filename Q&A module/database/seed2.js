const mongoose = require('mongoose');
const QApair = require('./'); // ./ defaults to index
// var example = require('./example.json');
var questions = require('./questions.js'); // real data from web
var answers = require('./answers.js'); // real data from web
const faker = require('faker');
const fs = require('fs');


var sampleData1 = require('./sample1.json')
var sampleData2 = require('./sample2.json')

const insertMockData = function() {
  QApair.create(sampleData1)
  .then(() => {
    console.log('seeded');
  })
  .catch((err) => {
    console.error(err);
  });
};

insertMockData()

const insertMockData2 = function() {
  QApair.create(sampleData2)
  .then(() => {
    console.log('seeded');
  })
  .catch((err) => {
    console.error(err);
  });
};

// insertMockData2()
