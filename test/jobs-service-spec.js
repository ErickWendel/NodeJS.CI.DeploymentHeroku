var express = require('express');
var app = express();
var expect = require('chai').expect;
var request = require('supertest');

var dataJobSaved;
var db = {
    saveJob: function(job) {
        dataJobSaved = job;
    },
    findJobs: function() {
        return new Promise(function(resolve, reject) {
            resolve(["hi"]);
        });
    }
};

var jobService = require('./../jobs-service')(db, app);
describe('get jobs', function() {

    it('get should give me a json list of jobs', function(done) {
        request(app).get('/api/jobs')
            .expect('Content-Type', /json/)
            .end(function(err, res) {
                expect(res.body).to.be.a('Array');
                done();
            });

    });

});

describe('save jobs', function() {

    it('should validate that title is greater than 4 characters');
    it('should validate that title is greater than 40 characters');
    it('should validate that description is greater than 4 characters');
    it('should validate that description is less than 250 characters');


    var newJob = {
        title: 'Cook',
        description: "One Description"
    };
    it('should pass the job to the database save ', function(done) {
        request(app).post('/api/jobs').send(newJob).end(function(err, success) {
            expect(dataJobSaved).to.be.deep.equal(newJob);
            done();
        });

    });

    it('should return a status 200 to the front end if database saved ');
    it('should return a job with id');
    it('should return error if database failed');
});