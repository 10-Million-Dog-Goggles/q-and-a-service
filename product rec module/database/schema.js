var mongoose = require('mongoose');

var PRSchema = new mongoose.Schema({
  number: { type: Number, unique: true, required: true, dropDups: true },
  image: { type: String, required: true},
  rating: { type: Number, required: true },
  numReviews: { type: Number, required: true },
  brand: { type: String, required: true },
  name: { type: String, required: true },
	price: { type: String, required: true },
});

module.exports = PRSchema;
