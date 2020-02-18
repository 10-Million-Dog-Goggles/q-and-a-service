const faker = require('faker');
const fs = require('fs');

const writeUsers = fs.createWriteStream(__dirname + '/sampleDataM.json');

// var columns = `productID, QApairs.number, QApairs.qNickname, QApairs.question, QApairs.qDate, QApairs.qEmail, QApairs.qLocation, QApairs.newQ, QApairs.ansCount,QApairs.answers.aNickname, QApairs.answers.answer, QApairs.answers.aDate. QApairs.answers.aEmail, QApairs.answers.aLocation, QApairs.answers.yes, QApairs.answers.no, QApairs.answers.inappropriate, QApairs.answers.newAns\n`

// var columns = `productID, QApairs\n`
// var a = `[`
// var b= `]`


// writeUsers.write(columns, 'utf8');
writeUsers.write('', 'utf8');

function writeTenMillionUsers(writer, encoding, callback) {
  let i = 5;
  let productID = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      productID += 1;

      var pairNum = faker.random.number({ min: 0, max: 5 });
      var answerNum = faker.random.number({ min: 0, max: 5 });
      var QApairs = [];
      if(pairNum > 0){
        for(var k = 0; k < pairNum; k++){
          var QAinstance = {
            number: j,
            qNickname: faker.name.firstName(),
            question: faker.name.firstName() + faker.name.firstName(),//chg to sentance
            qDate: faker.date.between('2017-01-01', '2020-02-02'),
            qEmail: faker.internet.email(),
            qLocation: faker.address.city() + " " + faker.address.state(),
            newQ: false,
            ansCount: answerNum
          };
          var answerPair = [];
          if(answerNum > 0){
            for(var j = 0; j < answerNum; j++){
              var answerInstance = {
                  aNickname: faker.name.firstName(),
                  answer: faker.name.firstName() + faker.name.firstName(), //chg to sentance
                  aDate: faker.date.between('2017-01-01', '2020-02-02'),
                  aEmail: faker.internet.email(),
                  aLocation: faker.address.city() + " " + faker.address.state(),
                  yes: faker.random.number({ min: 0, max: 20 }),
                  no: faker.random.number({ min: 0, max: 10 }),
                  inappropriate: faker.random.arrayElement(["yes","no"]),
                  newAns: false
              };
              answerPair.push(answerInstance)
            };
          };
          QAinstance.answers = answerPair;
          QApairs.push(QAinstance);
        }
      }
      productID = productID
      QApairs = JSON.stringify(QApairs)
      if(productID === 1){
        var data = `[{ "productID" : ${productID}, "QApairs" : ${QApairs}},\n`
      } else if (i === 0){
        var data = `{ "productID" : ${productID}, "QApairs" : ${QApairs}}]\n`
      } else {
        var data = `{ "productID" : ${productID}, "QApairs" : ${QApairs}},\n`
      }


      if (i === 0) {
        // writer.write(data, encoding, callback);
        writer.write(data, encoding, callback);
      } else {
        // ok = writer.write(data, encoding);
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }


write()
}

writeTenMillionUsers(writeUsers, 'utf-8', () => {
  writeUsers.end();
});





// var pairNum = faker.random.number({ min: 0, max: 5 });
// var QApair = [];
// if(pairNum > 0){
//   for(var i = 0; i < pariNum; i++){
//     var QAinstance = {
//       number: j,
//       qNickname: faker.name.firstName(),
//       question: faker.name.firstName() + faker.name.firstName(),//chg to sentance
//       qDate: faker.date.between('2017-01-01', '2020-02-02'),
//       qEmail: faker.internet.email(),
//       qLocation: faker.address.city() + " " + faker.address.state(),
//       newQ: false,
//       ansCount: answerQuan
//     };
//     var answerNum = faker.random.number({ min: 0, max: 5 });
//       var answerPair = [];
//       if(answerNum > 0){
//         for(var j = 0; j < answerNum; j++){
//           var answerInstance = {
//               aNickname: faker.name.firstName(),
//               answer: faker.name.firstName() + faker.name.firstName(), //chg to sentance
//               aDate: faker.date.between('2017-01-01', '2020-02-02'),
//               aEmail: faker.internet.email(),
//               aLocation: faker.address.city() + " " + faker.address.state(),
//               yes: faker.random.number({ min: 0, max: 20 }),
//               no: faker.random.number({ min: 0, max: 10 }),
//               inappropriate: faker.random.arrayElement(["yes","no"]),
//               newAns: false
//           };
//         };
//       };
//     QAinstance.answerPair = answerPair;
//     QApair.push(QAinstance);
//   }
// }