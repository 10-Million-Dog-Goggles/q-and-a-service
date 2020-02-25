var pgModel = require('../PGdatabase/pgModel.js')

var pgControllers = {
  get: (req, res) => {
    pgModel.get(req.params.productID)
      .then(data => {
        res.status(200).send(data.rows)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  },
};

module.exports = pgControllers;