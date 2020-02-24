// create a client instance
// connect to the db
// creat a table
  // you may want to define schema first
// query insert data
// test query if it is inserted correctly
// close connection

const {Client} = require('pg')
const sampleData = require('./dataJSON.json')

var questionSchema =
  "QApair_ID int primary key, productID int, number int, qNickname varchar(50), question varchar(250), qData varchar(50), qEmail varchar(50), qLocation varchar(50), newQ varchar(50), ansCount int";

var answerSchema =
  "answer_ID int primary key, qNickname varchar(50), answer varchar(250), qData varchar(50), qEmail varchar(50), qLocation varchar(50), yes varchar(50), no varchar(50), inappropriate varchar(50), newAns int";

  const client = new Client ({
    user: "postgres",
    password:"1023",
    host : "localhost",
    port : 5432,
    database : "QAdatabase"
  })

/*
// create a client instance
// connect to the client
  // create 2 tables (question, answer)
  client.connect()
  .then(()=> console.log('connection to PostgreSQL successful'))
  .then(()=> client.query(`CREATE TABLE questions (${questionSchema})`)) // create a shema
  .then(()=> client.query(`CREATE TABLE answers (${answerSchema})`)) // create a shema
  .catch(err => console.log(err))
  .finally(()=> client.end()) // close connection at the end
*/

//populate the data into table 1

// drain or something when populate the data


//connect to client first
  // iterate over sampleData -> each element will be an array of product
  // each time you get productID
// iterate over product.QApairs and map it -> you will get an object
  // product.QApairs.map(QAobj =>
    //use properties in each obj references: QAobj.number, QAobj.qNickname, QAobj.question, QAobj.qData, QAobj.qEmail, QAobj.qLocation, QAobj.newQ, QAobj.ansCount
    //dataSet = `(${QAobj.number}, ${QAobj.qNickname},${QAobj.question},${QAobj.qData},${QAobj.qEmail},${QAobj.qLocation},${QAobj.newQ},${QAobj.ansCount})`

    // client.query(`INSERT INTO question (QApair_ID productID number qNickname question qDate	qEmail	qLocation	newQ	ansCount) values${dataSet}`)

  // )
//populate the data into table 2










//shell commands : https://www.postgresqltutorial.com/postgresql-cheat-sheet/

client.connect()
  .then(()=> console.log('connection to PostgreSQL successful'))

  // DROP TABLES
  // .then(()=> client.query('DROP TABLE IF EXISTS questions;'))
  // .then(()=> client.query('DROP TABLE IF EXISTS answers;'))
  // .then(()=> console.log('drop successful'))

  // CREATE TABLES
  // .then(()=> client.query('CREATE TABLE questions (QApair_ID int primary key, productID int, qNickname varchar(250), question varchar(250), qDate varchar(250), qEmail varchar(250), qLocation varchar(250))'))
  // .then(()=> client.query('CREATE TABLE answers (Answer_ID int primary key, qNickname varchar(250), answer varchar(250), qDate varchar(250), qEmail varchar(250), qLocation varchar(250), yes varchar(50), no varchar(50), inappropriate varchar(50), QApair_ID int references questions(QApair_ID))'))
  // .then(()=> console.log('create successful'))

  // COPY DATA FILES
  // .then(()=> client.query(`COPY questions FROM '${__dirname}/Qdata2.csv' DELIMITER ',' CSV HEADER`))
  // .then(()=> client.query(`COPY answers FROM '${__dirname}/Adata2.csv' DELIMITER ',' CSV HEADER`))
  // .then(()=> console.log('copy successful'))

  // CREATE INDEX
  .then(()=> clinent.query(`CREATE INDEX productID  ON questions`)
  .then(()=> clinent.query(`CREATE INDEX QApair_ID  ON answers`)
  .then(()=> console.log('Indexing successful'))

  // SELECT ALL
  .then(()=> client.query("SELECT * FROM questions"))
  .then(result => console.table(result.rows))
  .then(()=> client.query("SELECT * FROM answers"))
  .then(result => console.table(result.rows))

  // ERROR
  .catch(err => console.log(err))
