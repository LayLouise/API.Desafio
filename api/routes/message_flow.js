module.exports = app => {
  const controller = require('../controllers/message_flow')();

  app.route('/api/v1/message_flow')
    .get(controller.listmessage_flow);
}