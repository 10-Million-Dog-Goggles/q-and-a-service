var mongoose = require('mongoose');

var QASchema = new mongoose.Schema({
  productID:  { type: Number, unique: true, required: true, dropDups: true },
  QApairs: [{
    number: { type: Number, unique: true, required: true, dropDups: true },
    qNickname: { type: String, unique: true, required: true, dropDups: true },
    question: { type: String, unique: true, required: true, dropDups: true },
    qDate: { type: Date },
    qEmail: { type: String, unique: true, required: true, dropDups: true },
    qLocation: { type: String },
    newQ: String,
    ansCount: Number,
    answers: [
      {
        aNickname: String,
        answer: String,
        aDate: Date,
        aEmail: String,
        aLocation: String,
        yes: Number,
        no: Number,
        inappropriate: String,
        newAns: String
      }
    ]
  }]
});

module.exports = QASchema;

// productID

// let QApairsQty = faker.random.number({ min: 0, max: 3 });
// // randomly generate qa pairs until the desired quantity is reached
// for (var j = 0; j < QApairsQty; j++) {
//   QApairs.j.number = j;
//   QApairs.j.qNickname =
//   QApairs.j.question =
//   QApairs.j.qDate =
//   QApairs.j.qEmail =
//   QApairs.j.qLocation =
//   QApairs.j.newQ =

//   let ansQty = faker.random.number({ min: 1, max: 3 });

//   QApairs.j.ansCount = ansQty
//   for (var k = 0; k < ansQty; k++) {
//     QApairs.j.answers.k.aNickname
//     QApairs.j.answers.k.answer
//     QApairs.j.answers.k.aDate
//     QApairs.j.answers.k.aEmail
//     QApairs.j.answers.k.aLocation
//     QApairs.j.answers.k.yes
//     QApairs.j.answers.k.no
//     QApairs.j.answers.k.inappropriate
//     QApairs.j.answers.k.newAns
//   }
// }


// productID, QApairs.number, QApairs.qNickname, QApairs.question, QApairs.qDate, QApairs.qEmail, QApairs.qLocation, QApairs,newQ, QApairs.ansCount, QApairs.answers.aNickname, QApairs.answers.answer, QApairs.answers.aDate. QApairs.answers.aEmail, QApairs.answers.aLocation, QApairs.answers.yes, QApairs.answers.no, QApairs.answers.inappropriate, QApairs.answers.newAns