const homeRoute = require('./home');
const clothingRoute = require('./clothing');

const constructorMethod = (app) => {
  app.use('/home', homeRoute);
  app.use('/clothing', clothingRoute);

  app.use('*', (req, res) => {
    res.redirect('/home');
  });
};

module.exports = constructorMethod;
