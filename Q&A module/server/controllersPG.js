var client = require('../PGdatabase/index.js')

var controllers = {
  get: (req, res) => {
    client.query(`select * from answers limit 10 offset 900000`)
    // client.query(`select * from answers limit 10 offset 900000`)
    // dbHelpers.get(req.params.productID)
      .then(data => {
        res.status(200).send(data.rows)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  },
};

module.exports = controllers;