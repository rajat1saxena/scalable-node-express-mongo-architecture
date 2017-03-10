var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var PeopleSchema = Schema({
  _id: {type: ObjectId},
  name: {type: String},
  age: {type: Number},
  address: {type: String}
});

var People = mongoose.model('People', PeopleSchema);
exports.People = People;
