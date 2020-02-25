// create a client instance
// connect to the db
// creat a table
  // you may want to define schema first
// query insert data
// test query if it is inserted correctly
// close connection

const {Client} = require('pg')
const sampleData = require('./dataJSON.json')

  const client = new Client ({
    user: "postgres",
    password:"1023",
    host : "localhost",
    port : 5432,
    database : "QAdatabase"
  })

// create a client instance
// connect to the client
  // create 2 tables (question, answer)
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
  // .then(()=> client.query('DROP TABLE IF EXISTS answers;'))
  // .then(()=> client.query('DROP TABLE IF EXISTS questions;'))
  // .then(()=> console.log('drop successful'))

  // CREATE TABLES
  // .then(()=> client.query('CREATE TABLE questions (QApair_ID int primary key, productID int, qNickname varchar(250), question varchar(250), qDate varchar(250), qEmail varchar(250), qLocation varchar(250))'))
  // .then(()=> client.query('CREATE TABLE answers (Answer_ID int primary key, qNickname varchar(250), answer varchar(250), qDate varchar(250), qEmail varchar(250), qLocation varchar(250), yes varchar(50), no varchar(50), inappropriate varchar(50), QApair_ID int references questions(QApair_ID))'))
  // .then(()=> console.log('create successful'))

  // COPY DATA FILES
  // .then(()=> client.query(`COPY questions FROM '${__dirname}/Qdata.csv' DELIMITER ',' CSV HEADER`))
  // .then(()=> client.query(`COPY answers FROM '${__dirname}/Adata.csv' DELIMITER ',' CSV HEADER`))
  // .then(()=> console.log('copy successful'))

  // CREATE INDEX
  // .then(()=> client.query(`CREATE INDEX productID ON questions USING btree (productID)`))
  // .then(()=> client.query(`CREATE INDEX QApair_ID ON answers USING btree (QApair_ID)`))
  // .then(()=> console.log('Indexing successful'))

  // SELECT ALL
  // .then(()=> client.query("SELECT * FROM questions"))
  // .then(result => console.table(result.rows))
  // .then(()=> client.query("SELECT * FROM answers"))
  // .then(result => console.table(result.rows))

  .then(()=> client.query("select * from answers limit 10 offset 9000000;"))
  // ERROR
  .catch(err => console.log(err))

//test query
  // limit and offset
// SELECT * from answers LIMIT 10 OFFSET 9000000;
  // inner join
// SELECT * FROM questions a INNER JOIN answers b ON a.QApair_ID = b.QApair_ID limit 10;
  // offset 90000
// SELECT * FROM questions a INNER JOIN answers b ON a.QApair_ID = b.QApair_ID limit 10 OFFSET 90000;
  // select specific columns
// SELECT a.productID, a.question, b.answer FROM questions a INNER JOIN answers b ON a.QApair_ID = b.QApair_ID limit 10 OFFSET 90000;

// query design
  // var columns = `a.productID, a.question, b.answer`
  // `SELECT ${columns} FROM questions a INNER JOIN answers b ON a.QApair_ID = b.QApair_ID limit 10 OFFSET 90000;`