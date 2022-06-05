module.exports = () => {
  const subscriptionDB = require('../data/subscription.json');
  const controller = {};

  controller.listsubscription = (req, res) => res.status(200).json(subscriptionDB);

  return controller;
}