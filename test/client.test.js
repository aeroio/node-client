/**
 * Test dependencies.
 */
var chai = require('chai');
var should = chai.should();

/**
 * Subject.
 */
var BasicAuth = require('sourcery').BasicAuth;
var client = require('..');

describe('aero.io client', function() {
  var aero    = client('sid', 'token');
  var Project = aero.Project;
  var Error   = aero.Error;
  var error   = new Error;
  var project = new Project;

  it('configures the Basic Auth', function() {
    error.auth.user.should.eql('sid');
    error.auth.pass.should.eql('token');
    error.auth.type.should.eql(BasicAuth);
  });

  it('configures the correct url address', function() {
    error.host.should.eql('https://aero.io/api/v1');
  });

  it('configures the correct extension', function() {
    error.ext.should.eql('json');
  });

  it('sets the correct path for Error', function() {
    error.path.should.eql('/projects/:project_id/errors');
  });

  it('sets the correct path for Project', function() {
    project.path.should.eql('/projects');
  });
});
