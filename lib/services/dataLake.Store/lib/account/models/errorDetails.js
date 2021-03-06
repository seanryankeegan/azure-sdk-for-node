/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the ErrorDetails class.
 * @constructor
 * Data Lake Store error details information
 *
 * @member {string} [code] the HTTP status code or error code associated with
 * this error
 *
 * @member {string} [message] the error message localized based on
 * Accept-Language
 *
 * @member {string} [target] the target of the particular error (for example,
 * the name of the property in error).
 *
 */
function ErrorDetails() {
}

/**
 * Defines the metadata of ErrorDetails
 *
 * @returns {object} metadata of ErrorDetails
 *
 */
ErrorDetails.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'ErrorDetails',
    type: {
      name: 'Composite',
      className: 'ErrorDetails',
      modelProperties: {
        code: {
          required: false,
          readOnly: true,
          serializedName: 'code',
          type: {
            name: 'String'
          }
        },
        message: {
          required: false,
          readOnly: true,
          serializedName: 'message',
          type: {
            name: 'String'
          }
        },
        target: {
          required: false,
          readOnly: true,
          serializedName: 'target',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = ErrorDetails;
