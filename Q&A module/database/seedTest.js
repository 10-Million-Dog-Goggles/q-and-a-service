const faker = require('faker');
const fs = require('fs');

const writeUsers = fs.createWriteStream(__dirname + '/sampleDataM.csv');
// writeUsers.write('id,username,avatar\n', 'utf8');
writeUsers.write('productID, QApairs.j.number, QApairs.j.qNickname, QApairs.j.question, QApairs.j.qDate, QApairs.j.qEmail, QApairs.j.qLocation, QApairs,newQ, QApairs.j.ansCount, QApairs.j.answers.k.aNickname, QApairs.j.answers.k.answer, QApairs.j.answers.k.aDate. QApairs.j.answers.k.aEmail, QApairs.j.answers.k.aLocation, QApairs.j.answers.k.yes, QApairs.j.answers.k.no, QApairs.j.answers.k.inappropriate, QApairs.j.answers.k.newAns\n', 'utf8');

// writeUsers.write('id,username,avatar\n', 'utf8');


function writeTenMillionUsers(writer, encoding, callback) {
  let i = 3;
  // let id = 0;
  let productID = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      // id += 1;
      // const username = faker.internet.userName();
      // const avatar = faker.image.avatar();
      // const data = `${id},${username},${avatar}\n`;
      productID +=1;
      let QApairsQty = faker.random.number({ min: 0, max: 3 });

      // it is not generating multiple pairs or multiple answers
      for (var j = 0; j < QApairsQty; j++) {
        QApairs = [];
        QApairs.j = {}
        QApairs.j.number = j;
        QApairs.j.qNickname = faker.name.firstName();
        QApairs.j.question = faker.hacker.phrase() + ' ' + faker.lorem.sentences(faker.random.number({ min: 1, max: 3 }));
        QApairs.j.qDate = faker.date.between('2017-01-01', '2020-02-02');
        QApairs.j.qEmail = faker.internet.email();//
        QApairs.j.qLocation = faker.address.city() + " " + faker.address.state();
        QApairs.j.newQ = false;

        let answerQuan = faker.random.number({ min: 1, max: 3 });

        QApairs.j.ansCount = answerQuan;

        for (var k = 0; k < answerQuan; k++) {
          QApairs.j.answers = []
          QApairs.j.answers.k = {}
          QApairs.j.answers.k.aNickname = faker.name.firstName();
          QApairs.j.answers.k.answer = faker.hacker.phrase() + ' ' + faker.lorem.sentences(faker.random.number({ min: 1, max: 3 }));
          QApairs.j.answers.k.aDate = faker.date.between('2017-01-01', '2020-02-02');
          QApairs.j.answers.k.aEmail = faker.internet.email();//
          QApairs.j.answers.k.aLocation = faker.address.city() + " " + faker.address.state();//
          QApairs.j.answers.k.yes = faker.random.number({ min: 0, max: 20 });
          QApairs.j.answers.k.no = faker.random.number({ min: 0, max: 10 });
          QApairs.j.answers.k.inappropriate = faker.random.arrayElement(["yes","no"]);
          QApairs.j.answers.k.newAns = false;

        }
      }

      const data = `${productID},${QApairs.j.number},${QApairs.j.qNickname},${QApairs.j.question},${QApairs.j.qDate},${QApairs.j.qEmail},${QApairs.j.qLocation},${QApairs.j.newQ},${QApairs.j.ansCount},${QApairs.j.answers.k.aNickname},${QApairs.j.answers.k.answer},${QApairs.j.answers.k.answer},${QApairs.j.answers.k.aDate},${QApairs.j.answers.k.aEmail},${QApairs.j.answers.k.aLocation},${QApairs.j.answers.k.yes},${QApairs.j.answers.k.no},${QApairs.j.answers.k.inappropriate},${QApairs.j.answers.k.newAns}\n`;

      const data 



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


