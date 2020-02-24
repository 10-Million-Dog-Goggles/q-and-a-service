const faker = require('faker');
const fs = require('fs');

const writeUsers = fs.createWriteStream(__dirname + '/Qdata.csv');

var columns = `QApair_ID, productID, qNickname, question, qDate, qEmail, qLocation\n`

writeUsers.write(columns, 'utf8');

function writeTenMillionUsers(writer, encoding, callback) {
  let i = 10000000;
  let QApairID = 1;
  let productID = 1;
  function write() {
    let ok = true;
    do {
      i -= 1;
      QApairID += 1;
      productID += 1;
      var qNickname = faker.name.firstName()
      var question = faker.hacker.phrase()//chg to sentance
      var qDate = faker.date.between('2017-01-01', '2020-02-02')
      var qEmail = faker.internet.email()
      var qLocation = faker.address.city()
      var newQ = false

      productID = productID
      if(productID % 5000 === 0){
        console.log(productID)
      }

      var data = `${QApairID}, ${productID}, "${qNickname}", "${question}", "${qDate}", "${qEmail}", "${qLocation}"\n`

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