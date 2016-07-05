//  OpenShift sample Node application
var express = require('express'),
  fs = 	('fs'),
  app = express(),
  eps = require('ejs'),
  morgan = require('morgan');

app.engine('html', require('ejs').renderFile);
app.use(morgan('combined'))
app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
  ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0',
  mongoURL = process.env.OPENSHIFT_MONGODB_DB_URL || process.env.MONGO_URL,
  mongoURLLabel = "";

app.get('/', function (req, res) {
  res.render('app_placa.html');
});

app.get('/app_placa', function (req, res) {
  res.render('app_placa.html');
});

app.get('/index', function (req, res) {
  res.render('index.html');
});

app.get('/app_robot', function (req, res) {
  res.render('app_robot.html');
});

// error handling
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something bad happened!');
});

initDb(function (err) {
  console.log('Error connecting to Mongo. Message:\n' + err);
});

app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);

module.exports = app;
