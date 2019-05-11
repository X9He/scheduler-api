let express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
  mongoose = require('mongoose'),
  Schedules = require('./api/models/schedulerModel'), //created model loading here
  Users = require('./api/models/userModel'), //created model loading here
  bodyParser = require('body-parser');
  

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'scheduler-db'
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/scheduleDB', { useNewUrlParser: true }); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


let routes = require('./api/routes/schedulerRoutes'); //importing route
routes(app); //register the route


app.listen(port);

console.log('scheduler RESTful API server started on: ' + port);