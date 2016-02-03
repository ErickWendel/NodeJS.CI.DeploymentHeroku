var express = require('express');
var mongoose = require('mongoose');
var JobModel = require('./models/Job');
var jobsData = require('./jobs-data');
var app = express();

app.set('views', __dirname);
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));

app.get('/api/jobs', function(req, res) {
   jobsData.findJobs().then(function (collection) {
      res.send(collection); 
   });
});
app.get('*', function (req, res) {
    res.render('index');
});

// mongoose.connect('mongodb://localhost/jobfinder');
mongoose.connect('mongodb://jobfinder-course:erick@ds055515.mongolab.com:55515/jobfinder-course')
var connection = mongoose.connection;

connection.once('open', function () {
    console.log("mongodb is running");
   jobsData.seedJobs();
});
//using for enviroment of cloud9
app.listen(process.env.PORT, process.env.IP);