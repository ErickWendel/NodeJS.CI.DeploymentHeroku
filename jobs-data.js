var mongoose = require('mongoose');
var Promise = require('bluebird');
var Job = require('./models/Job');
// var Job = mongoose.model('Job');
var jobs = [{
        title: 'Cook',
        description: "One Description"
    }, {
        title: 'Waiter',
        description: "One Description"
    }, {
        title: 'Programmer',
        description: "One Description"
    }, {
        title: 'Axe Maker',
        description: "One Description"
    }

];
var findJobs = function(query) {
    return new Promise.cast(Job.find(query).exec());
}

Promise.promisifyAll(Job);
var seedJobs = function() {
    
    
    return findJobs({}).then(function(collection) {
        if (collection.length == 0) {

            return Promise.map(jobs, function(job) {
                return Job.createAsync(job);
            });
        }
    });

};
exports.findJobs = findJobs;
exports.seedJobs = seedJobs;