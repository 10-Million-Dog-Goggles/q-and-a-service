const client = require('./index.js');

var pgModel = {
  get: (proID) => client.query(`SELECT * FROM questions a INNER JOIN answers b ON a.QApair_ID = b.QApair_ID WHERE a.productID = ${proID};`)
}

module.exports = pgModel;