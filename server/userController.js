// Import contact model
User = require('./userModel');
// Handle index actions
exports.index = function (req, res) {
  User.get(function (err, users) {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    res.json({
      status: "success",
      message: "Users retrieved successfully",
      data: users
    });
  });
};
// Handle create contact actions
exports.new = function (req, res) {
  var user = new User();
  user.email = req.body.email ? req.body.email : user.email;
  user.password = req.body.password;
  user.fname = req.body.fname;
  user.lname = req.body.lname;
// save the contact and check for errors
  user.save(function (err) {
    if (err)
      res.json(err);
    res.json({
      message: 'New User created!',
      data: user
    });
  });
};
// Handle view contact info
exports.view = function (req, res) {
  User.findById(req.params.user_id, function (err, user) {
    if (err)
      res.send(err);
    res.json({
      message: 'User details',
      data: user
    });
  });
};
// Handle update contact info
exports.update = function (req, res) {
  User.findById(req.params.user_id, function (err, user) {
    if (err)
      res.send(err);
    user.email = req.body.email ? req.body.email : user.email;
    user.password = req.body.password;
    user.fname = req.body.fname;
    user.lname = req.body.lname;
// save the contact and check for errors
    user.save(function (err) {
      if (err)
        res.json(err);
      res.json({
        message: 'User Info updated',
        data: user
      });
    });
  });
};
// Handle delete contact
exports.delete = function (req, res) {
  User.remove({
    _id: req.params.user_id
  }, function (err, user) {
    if (err)
      res.send(err);
    res.json({
      status: "success",
      message: 'User deleted'
    });
  });
};
