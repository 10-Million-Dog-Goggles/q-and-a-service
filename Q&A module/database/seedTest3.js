// const faker = require('faker');
// const fs = require('fs');


// const writeUsers = fs.createWriteStream(__dirname + '/sampleDataM.csv');
// writeUsers.write('productId,username,avatar\n', 'utf8');


//   function writeTenMillionUsers(writer, encoding, callback) {
//     let i = 100;
//     let productId = 0;
//     function write() {
//       let ok = true;
//       do {
//         i -= 1;
//         productId += 1;
//         const username = JSON.stringify(faker.internet.userName());
//         // const username = faker.internet.userName();
//         const avatar = JSON.stringify(faker.name.firstName());
//         // const avatar = faker.image.avatar();
//         const data = `${productId},${username},${avatar}\n`;
//         if (i === 0) {
//           writer.write(data, encoding, callback);
//         } else {
//   // see if we should continue, or wait
//   // don't pass the callback, because we're not done yet.
//           ok = writer.write(data, encoding);
//         }
//       } while (i > 0 && ok);
//       if (i > 0) {
//   // had to stop early!
//   // write some more once it drains
//         writer.once('drain', write);
//       }
//     }
//   write()
//   }

// writeTenMillionUsers(writeUsers, 'utf-8', () => {
//   writeUsers.end();
// });