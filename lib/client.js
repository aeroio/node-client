/**
 * Sourcery.
 *
 * @type {Object}
 */
var sourcery  = require('sourcery');

/**
 * RESTful Resource.
 *
 * @type {Function}
 */
var Resource  = sourcery.Resource;

/**
 * Basic Auth Authenticator
 *
 * @type {Function}
 */
var BasicAuth = sourcery.BasicAuth;

/**
 * # Client
 *
 * Return the aero.io API resources.
 *
 * @param {String} sid
 * @param {String} token
 * @returns {Object}
 * @api public
 */
module.exports = function(sid, token) {
  var Base = Resource.extend({
    host: 'https://aero.io/api/v1',
    ext: 'json',
    auth: { type: BasicAuth, user: sid, pass: token }
  });

  var Project = Base.extend({
    path: '/projects'
  });

  var Error = Base.extend({
    path: '/projects/:project_id/errors'
  });

  return {
    Error: Error,
    Project: Project
  }
};
