module.exports = () => {
  const message_flowDB = require('../data/message_flow.json');
  const controller = {};

  controller.listmessage_flow = (req, res) => res.status(200).json(message_flowDB);

  return controller;
}