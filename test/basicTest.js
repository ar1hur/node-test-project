'use strict';

var app = require('../index.js');
var request = require('supertest');
//var expect = require("chai").expect;

describe('Homepage', function() {

  describe('when requesting /', function(){
    it('should response with status 200 and a Hello World!', function (done) {
      request(app)
        .get('/')
        .expect(200)
        .expect('Hello World!')
        .end(function(err, res){
          if (err) return done(err);
          done();
      });
    });
  });

  describe('when requesting /missing', function () {
    it('should response with 404', function (done) {
      request(app)
        .get('/missing')
        .expect(404, done);
    });
  });

});
