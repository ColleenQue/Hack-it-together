const homeRoute = require('./home');
const constructorMethod = (app) => {
  app.use('/home', homeRoute);
  
  app.use('*', (req, res) => {
    res.redirect('/home');
  });
};

module.exports = constructorMethod;
