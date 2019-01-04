var mongoose = require('mongoose');
// Setup schema
var userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  fname: {
    type: String,
    required: true
  },
  lname: {
    type: String,
    required: true
  }
});
// Export Contact model
var User = module.exports = mongoose.model('Users', userSchema);
module.exports.get = function (callback, limit) {
  User.find(callback).limit(limit);
};
