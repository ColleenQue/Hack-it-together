const express = require('express');
const app = express();
const static = express.static(__dirname + '/public');

const configRoutes = require('./routes');
const exphbs = require('express-handlebars');


app.use('/public', static);
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

configRoutes(app);


const PORT = process.env.PORT || 3030;


app.listen(PORT, () => {
  console.log("We've now got a server!");
  console.log(`server started on port ${PORT}`);
});





//  app.listen(3000, function(){
//   console.log('Your routes will be running on http://localhost:3000');
//  });
