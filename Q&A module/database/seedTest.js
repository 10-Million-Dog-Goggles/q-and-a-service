const faker = require('faker');
const fs = require('fs');

const writeUsers = fs.createWriteStream(__dirname + '/sampleDataM.csv');
// writeUsers.write('id,username,avatar\n', 'utf8');
var columns;
/*

for (var j = 0; j < 3; j++) {
  columns += `productID , QApairs.${j}.number, QApairs.${j}.qNickname, QApairs.${j}.question, QApairs.${j}.qDate, QApairs.${j}.qEmail, QApairs.${j}.qLocation, QApairs.${j}.newQ, QApairs.${j}.ansCount`
  for (var k = 0; k < 3; k++) {
    columns += `,QApairs.${j}.answers.${k}.aNickname, QApairs.${j}.answers.${k}.answer, QApairs.${j}.answers.${k}.aDate. QApairs.${j}.answers.${k}.aEmail, QApairs.${j}.answers.${k}.aLocation, QApairs.${j}.answers.${k}.yes, QApairs.${j}.answers.${k}.no, QApairs.${j}.answers.${k}.inappropriate, QApairs.${j}.answers.${k}.newAns`
  }
}
*/
//-----------------

// var columns = `productID, QApairs.number, QApairs.qNickname, QApairs.question, QApairs.qDate, QApairs.qEmail, QApairs.qLocation, QApairs.newQ, QApairs.ansCount ,QApairs.answers.aNickname, QApairs.answers.answer, QApairs.answers.aDate. QApairs.answers.aEmail, QApairs.answers.aLocation, QApairs.answers.yes, QApairs.answers.no, QApairs.answers.inappropriate, QApairs.answers.newAns\n`

//-----------------

// for (var j = 0; j < 3; j++) {
//   columns += `productID ,QApairs[${j}].number, QApairs[${j}].qNickname, QApairs[${j}].question, QApairs[${j}].qDate, QApairs[${j}].qEmail, QApairs[${j}].qLocation, QApairs[${j}].newQ, QApairs[${j}].ansCount`
//   for (var k = 0; k < 3; k++) {
//     columns += `,QApairs[${j}].answers[${k}].aNickname, QApairs[${j}].answers[${k}].answer, QApairs[${j}].answers[${k}].aDate. QApairs[${j}].answers[${k}].aEmail, QApairs[${j}].answers[${k}].aLocation, QApairs[${j}].answers[${k}].yes, QApairs[${j}].answers[${k}].no, QApairs[${j}].answers[${k}].inappropriate, QApairs[${j}].answers[${k}].newAns`
//   }
// }

//-----------------

for (var j = 0; j < 3; j++) {
  columns += `productID ,QApairs[${j}].number, QApairs[${j}].qNickname, QApairs[${j}].question, QApairs[${j}].qDate, QApairs[${j}].qEmail, QApairs[${j}].qLocation, QApairs[${j}].newQ, QApairs[${j}].ansCount`
  for (var k = 0; k < 3; k++) {
    columns += `,QApairs[${j}].answers[${k}].aNickname, QApairs[${j}].answers[${k}].answer, QApairs[${j}].answers[${k}].aDate. QApairs[${j}].answers[${k}].aEmail, QApairs[${j}].answers[${k}].aLocation, QApairs[${j}].answers[${k}].yes, QApairs[${j}].answers[${k}].no, QApairs[${j}].answers[${k}].inappropriate, QApairs[${j}].answers[${k}].newAns`
  }
}

columns += `\n`
writeUsers.write(columns, 'utf8');

// writeUsers.write('productID, QApairs.j.number, QApairs.j.qNickname, QApairs.j.question, QApairs.j.qDate, QApairs.j.qEmail, QApairs.j.qLocation, QApairs.j.newQ, QApairs.j.ansCount, QApairs.j.answers.k.aNickname, QApairs.j.answers.k.answer, QApairs.j.answers.k.aDate. QApairs.j.answers.k.aEmail, QApairs.j.answers.k.aLocation, QApairs.j.answers.k.yes, QApairs.j.answers.k.no, QApairs.j.answers.k.inappropriate, QApairs.j.answers.k.newAns\n', 'utf8');

function writeTenMillionUsers(writer, encoding, callback) {
  let i = 1;
  // let id = 0;
  let productID = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      // const data = `${id},${username},${avatar}\n`;
      productID += 1;
      let QApairsQty = faker.random.number({ min: 3, max: 3 });

      // it is not generating multiple pairs or multiple answers
      QApairs = [];
      for (var j = 0; j < QApairsQty; j++) {
        let answerQuan = faker.random.number({ min: 3, max: 3 });
        QApairs.push({
          number: j,
          qNickname: faker.name.firstName(),
          // question: faker.hacker.phrase() + ' ' + faker.lorem.sentences(faker.random.number({ min: 1, max: 3 })),
          question: faker.name.firstName() + faker.name.firstName(),
          qDate: faker.date.between('2017-01-01', '2020-02-02'),
          qEmail: faker.internet.email(),
          qLocation: faker.address.city() + " " + faker.address.state(),
          newQ: false,
          ansCount: answerQuan,
        })

        for (var k = 0; k < answerQuan; k++) {
          QApairs[j].answers = [];
          QApairs[j].answers.push({
            aNickname: faker.name.firstName(),
            // answer: faker.hacker.phrase() + ' ' + faker.lorem.sentences(faker.random.number({ min: 1, max: 3 })),
            answer: faker.name.firstName() + faker.name.firstName(),
            aDate: faker.date.between('2017-01-01', '2020-02-02'),
            aEmail: faker.internet.email(),
            aLocation: faker.address.city() + " " + faker.address.state(),
            yes: faker.random.number({ min: 0, max: 20 }),
            no: faker.random.number({ min: 0, max: 10 }),
            inappropriate: faker.random.arrayElement(["yes","no"]),
            newAns: false
          })
        }
      }

      var data = `${productID}`
      for (var j = 0; j < 3; j++) {
        if(!QApairs[j]){ // if it is undefined
          data += `,,,,,,,,`;
        } else {
          data += `,${QApairs[j].number},${QApairs[j].qNickname},${QApairs[j].question},${QApairs[j].qDate},${QApairs[j].qEmail},${QApairs[j].qLocation},${QApairs[j].newQ},${QApairs[j].ansCount}`
        }
        for (var k = 0; k < 3; k++) {
          if(!QApairs[j] || !QApairs[j].answers){ //if it is undefined
            data += `,,,,,,,,,,`;
          } else if (QApairs[j].answers && QApairs[j].answers[k]){
            data += `,${QApairs[j].answers[k].aNickname},${QApairs[j].answers[k].answer},${QApairs[j].answers[k].answer},${QApairs[j].answers[k].aDate},${QApairs[j].answers[k].aEmail},${QApairs[j].answers[k].aLocation},${QApairs[j].answers[k].yes},${QApairs[j].answers[k].no},${QApairs[j].answers[k].inappropriate},${QApairs[j].answers[k].newAns}`
          } else {
            // data += `,,,,,,,,,,`;
          }
        }
      }

      data += `\n`


      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
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