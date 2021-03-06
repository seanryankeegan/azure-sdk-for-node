// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information. 

var Constants = require('./constants'),
  uuid = require('uuid');

/**
* Checks if a parsed URL is HTTPS
*
* @param {object} urlToCheck The url to check
* @return {bool} True if the URL is HTTPS; false otherwise.
*/
exports.urlIsHTTPS = function (urlToCheck) {
  return urlToCheck.protocol.toLowerCase() === Constants.HTTPS;
};

/**
* Checks if a value is null or undefined.
*
* @param {object} value The value to check for null or undefined.
* @return {bool} True if the value is null or undefined, false otherwise.
*/
exports.objectIsNull = function (value) {
  return value === null || value === undefined;
};

/**
* Encodes an URI.
*
* @param {string} uri The URI to be encoded.
* @return {string} The encoded URI.
*/
exports.encodeUri = function (uri) {
  return encodeURIComponent(uri)
    .replace(/!/g, '%21')
    .replace(/'/g, '%27')
    .replace(/\(/g, '%28')
    .replace(/\)/g, '%29')
    .replace(/\*/g, '%2A');
};

/**
 * Returns a stripped version of the Http Response which only contains body, 
 * headers and the statusCode.
 * 
 * @param {stream} response - The Http Response
 * 
 * @return {object} strippedResponse - The stripped version of Http Response.
 */
exports.stripResponse = function (response) {
  var strippedResponse = {};
  strippedResponse.body = response.body;
  strippedResponse.headers = response.headers;
  strippedResponse.statusCode = response.statusCode;
  return strippedResponse;
};

/**
 * Returns a stripped version of the Http Request that does not contain the 
 * Authorization header.
 * 
 * @param {object} request - The Http Request object
 * 
 * @return {object} strippedRequest - The stripped version of Http Request.
 */
exports.stripRequest = function (request) {
  var strippedRequest = {};
  try {
    strippedRequest = JSON.parse(JSON.stringify(request));
    if (strippedRequest.headers && strippedRequest.headers.Authorization) {
      delete strippedRequest.headers.Authorization;
    } else if (strippedRequest.headers && strippedRequest.headers.authorization) {
      delete strippedRequest.headers.authorization;
    }
  } catch (err) {
    var errMsg = err.message;
    err.message = util.format('Error - "%s" occured while creating a stripped version of the request object - "%s".', errMsg, request);
    return err;
  }
  
  return strippedRequest;
};

/**
 * Validates the given uuid as a string
 * 
 * @param {string} uuid - The uuid as a string that needs to be validated
 * 
 * @return {boolean} result - True if the uuid is valid; false otherwise.
 */
exports.isValidUuid = function(uuid) {
  var validUuidRegex = new RegExp('^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$', 'ig');
  return validUuidRegex.test(uuid);
};

/**
 * Provides an array of values of an object. For example 
 * for a given object { 'a': 'foo', 'b': 'bar' }, the method returns ['foo', 'bar'].
 * 
 * @param {object} obj - An object whose properties need to be enumerated so that it's values can be provided as an array
 * 
 * @return {array} result - An array of values of the given object.
 */
exports.objectValues = function (obj) {
  var result = [];
  if (obj && obj instanceof Object) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        result.push(obj[key]);
      }
    }
  } else {
    throw new Error(util.format('The provided object "%s" is not a valid object that can be ' + 
      'enumerated to provide its values as an array.', util.inspect(obj, {depth: null})));
  }
  return result;
};

/**
* Generated UUID
*
* @return {string} RFC4122 v4 UUID.
*/
exports.generateUuid = function () {
  return uuid.v4();
};

exports = module.exports;
