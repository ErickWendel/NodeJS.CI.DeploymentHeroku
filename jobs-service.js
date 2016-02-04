var bodyParser = require('body-parser');
var jobsData = require('./jobs-data');
module.exports = function(db, app) {
    app.use(bodyParser.json());


    app.get('/api/jobs', function(req, res) {
        jobsData.findJobs().then(function(collection) {
            res.send(collection);
        });
    });
    app.post('/api/jobs', function(req, res) {
        db.saveJob(req.body);
        res.end();
    });
}