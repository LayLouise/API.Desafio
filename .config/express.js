const express    = require('express');
const bodyParser = require('body-parser');
const config     = require('config');


};module.exports = () => {
  const app = express();
  
  ...
  
  require('../api/routes/subscription')(app);

  return app;
};