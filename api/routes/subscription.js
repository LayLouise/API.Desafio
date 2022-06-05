module.exports = app => {
  const controller = require('../controllers/subscription')();

  app.route('/api/v1/subscription')
    .get(controller.listsubscription);
}