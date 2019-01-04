
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
  res.json({
    status: 'API Its Working',
    message: 'Beauty-Tracker API',
  });
});
// Import contact controller
var userController = require('./userController');
// Contact routes
router.route('/users')
  .get(userController.index)
  .post(userController.new);
router.route('/user/:user_id')
  .get(userController.view)
  .patch(userController.update)
  .put(userController.update)
  .delete(userController.delete);
// Export API routes
module.exports = router;
