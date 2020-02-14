const faker = require('faker');
const fs = require('fs');

const writeUsers = fs.createWriteStream(__dirname + '/sampleDataM.csv');
// writeUsers.write('id,username,avatar\n', 'utf8');
writeUsers.write('productID, QApairs.number, QApairs.qNickname, QApairs.question, QApairs.qDate, QApairs.qEmail, QApairs.qLocation, QApairs,newQ, QApairs.ansCount, QApairs.answers.aNickname, QApairs.answers.answer, QApairs.answers.aDate. QApairs.answers.aEmail, QApairs.answers.aLocation, QApairs.answers.yes, QApairs.answers.no, QApairs.answers.inappropriate, QApairs.answers.newAns\n', 'utf8');

function writeTenMillionUsers(writer, encoding, callback) {
  let i = 100;
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
      const QApairs.number
      const QApairs.qNickname
      const QApairs.question
      const QApairs.qDate
      const QApairs.qEmail
      const QApairs.qLocation
      const QApairs.newQ
      const QApairs.ansCount
      const QApairs.answers.aNickname
      const QApairs.answers.answer
      const QApairs.answers.aDate
      const QApairs.answers.aEmail
      const QApairs.answers.aLocation
      const QApairs.answers.yes
      const QApairs.answers.no
      const QApairs.answers.inappropriate
      const QApairs.answers.newAns

      const data = `${productID},${QApairs.number},${QApairs.qNickname},${QApairs.question},${QApairs.qDate},${QApairs.qEmail},${QApairs.qLocation},${QApairs,newQ},${QApairs.ansCount},${QApairs.answers.aNickname},${QApairs.answers.answer},${QApairs.answers.answer},${QApairs.answers.aDate},${QApairs.answers.aEmail},${QApairs.answers.aLocation},${QApairs.answers.yes},${QApairs.answers.no},${QApairs.answers.inappropriate},${QApairs.answers.newAns}\n`;




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




// [
//   {"name": "1", "children": [{"name": "1.1", "children":"1.2"}]},
//   {"id": "2", "thing": [{"name": "2.1", "children":"2.2"}]},
//   {"name": "3", "stuff": [{"name": "3.1", "children":"3.2"}]},
// ]

// name,
// children.name, children.children,
// id,
// thing.name, thing.children,
// stuff.name, stuff.children
// 1, 1.1, 1.2,
// ,,,2,2.1,2.2
// 3,,,,3,3.1,3.2