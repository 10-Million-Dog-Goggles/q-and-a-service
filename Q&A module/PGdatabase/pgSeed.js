const client = require('./index.js')
const sampleData = require('./dataJSON.json')





// create a client instance
// connect to the client
  // create 2 tables (question, answer)
  // client.connect()
  // .then(()=> console.log('connection to PostgreSQL successful'))
  // .then(()=> client.query(`CREATE TABLE question (${questionSchema})`)) // create a shema
  // .then(()=> client.query(`CREATE TABLE answer (${answerSchema})`)) // create a shema
  // .catch(err => console.log(err))
  // .finally(()=> client.end()) // close connection at the end

//populate the data into table 1


// drain or something when populate the data


//connect to client first
  // iterate over smapleData -> each element will be an array of product
  // each time you get productID
// iterate over product.QApairs and map it -> you will get an object
  // product.QApairs.map(QAobj =>
    //use properties in each obj references: QAobj.number, QAobj.qNickname, QAobj.question, QAobj.qData, QAobj.qEmail, QAobj.qLocation, QAobj.newQ, QAobj.ansCount

    // var dataSet = `(${QAobj.number}, ${QAobj.qNickname},${QAobj.question},${QAobj.qData},${QAobj.qEmail},${QAobj.qLocation},${QAobj.newQ},${QAobj.ansCount})`
  // )

//-----------populate the data into question table

// var dataSet = `(${QAobj.number}, ${QAobj.qNickname},${QAobj.question},${QAobj.qData},${QAobj.qEmail},${QAobj.qLocation},${QAobj.newQ},${QAobj.ansCount})`

client.connect()
  .then(()=> console.log('connection to PostgreSQL successful'))
  // .then(()=>
  //   sampleData.map(QAobj => {
  //     var dataSet = `(${QAobj.number}, ${QAobj.qNickname},${QAobj.question},${QAobj.qData},${QAobj.qEmail},${QAobj.qLocation},${QAobj.newQ},${QAobj.ansCount})`
  //     client.query(`INSERT INTO question (QApair_ID productID number qNickname question qDate	qEmail	qLocation	newQ	ansCount) values${dataSet}`)
  //   }))
  // .then(()=>
    // var dataSet = `(123, 'marco', 'how are you?','data','abcd@gmail.com','NY','yes',2)`
    // client.query(`INSERT INTO question (QApair_ID productID number qNuckname question qDate	qEmail	qLocation	newQ	ansCount) values (123, 'marco', 'how are you?','data','abcd@gmail.com','NY','yes',2)`))

  .then(()=> client.query("SELECT * FROM question"))
  .catch(err => console.log(err))

//-----------populate the data into answer table