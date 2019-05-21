let express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
  mongoose = require('mongoose'),
  Events = require('./api/models/eventModel'), //created model loading here
  Users = require('./api/models/userModel'), //created model loading here
  bodyParser = require('body-parser'),
  eventRoutes = require('./api/routes/eventRoutes'),
  userRoutes = require('./api/routes/userRoutes');


const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'scheduler-db';
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/scheduleDB', { useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(req.method, req.path)
  next()
});

eventRoutes(app);
userRoutes(app);


app.listen(port);


console.log('scheduler RESTful API server started on: ' + port);
