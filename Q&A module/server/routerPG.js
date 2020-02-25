const router = require('express').Router();
const pgControllers = require('./controllersPG.js');

router
  .route('/:productID')
  .get(pgControllers.get)

module.exports = router;