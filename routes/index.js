const homeRoute = require('./home');
const clothingRoute = require('./clothing');
const transportationRoute = require('./transportation');
const questionsRoute = require('./questions');
const libraryRoute = require('./library');

const constructorMethod = (app) => {
  app.use('/home', homeRoute);
  app.use('/clothing', clothingRoute);
  app.use('/transportation', transportationRoute);
  app.use('/questions', questionsRoute);
  app.use('/library', libraryRoute);

  app.use('*', (req, res) => {
    res.redirect('/home');
  });
};

module.exports = constructorMethod;
