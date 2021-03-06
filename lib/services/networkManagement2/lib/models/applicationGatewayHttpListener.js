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

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the ApplicationGatewayHttpListener class.
 * @constructor
 * Http listener of an application gateway.
 *
 * @member {object} [frontendIPConfiguration] Frontend IP configuration
 * resource of an application gateway.
 *
 * @member {string} [frontendIPConfiguration.id] Resource ID.
 *
 * @member {object} [frontendPort] Frontend port resource of an application
 * gateway.
 *
 * @member {string} [frontendPort.id] Resource ID.
 *
 * @member {string} [protocol] Protocol. Possible values are: 'Http' and
 * 'Https'. Possible values include: 'Http', 'Https'
 *
 * @member {string} [hostName] Host name of HTTP listener.
 *
 * @member {object} [sslCertificate] SSL certificate resource of an application
 * gateway.
 *
 * @member {string} [sslCertificate.id] Resource ID.
 *
 * @member {boolean} [requireServerNameIndication] Applicable only if protocol
 * is https. Enables SNI for multi-hosting.
 *
 * @member {string} [provisioningState] Provisioning state of the HTTP listener
 * resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
 *
 * @member {string} [name] Name of the resource that is unique within a
 * resource group. This name can be used to access the resource.
 *
 * @member {string} [etag] A unique read-only string that changes whenever the
 * resource is updated.
 *
 */
function ApplicationGatewayHttpListener() {
  ApplicationGatewayHttpListener['super_'].call(this);
}

util.inherits(ApplicationGatewayHttpListener, models['SubResource']);

/**
 * Defines the metadata of ApplicationGatewayHttpListener
 *
 * @returns {object} metadata of ApplicationGatewayHttpListener
 *
 */
ApplicationGatewayHttpListener.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'ApplicationGatewayHttpListener',
    type: {
      name: 'Composite',
      className: 'ApplicationGatewayHttpListener',
      modelProperties: {
        id: {
          required: false,
          serializedName: 'id',
          type: {
            name: 'String'
          }
        },
        frontendIPConfiguration: {
          required: false,
          serializedName: 'properties.frontendIPConfiguration',
          type: {
            name: 'Composite',
            className: 'SubResource'
          }
        },
        frontendPort: {
          required: false,
          serializedName: 'properties.frontendPort',
          type: {
            name: 'Composite',
            className: 'SubResource'
          }
        },
        protocol: {
          required: false,
          serializedName: 'properties.protocol',
          type: {
            name: 'String'
          }
        },
        hostName: {
          required: false,
          serializedName: 'properties.hostName',
          type: {
            name: 'String'
          }
        },
        sslCertificate: {
          required: false,
          serializedName: 'properties.sslCertificate',
          type: {
            name: 'Composite',
            className: 'SubResource'
          }
        },
        requireServerNameIndication: {
          required: false,
          serializedName: 'properties.requireServerNameIndication',
          type: {
            name: 'Boolean'
          }
        },
        provisioningState: {
          required: false,
          serializedName: 'properties.provisioningState',
          type: {
            name: 'String'
          }
        },
        name: {
          required: false,
          serializedName: 'name',
          type: {
            name: 'String'
          }
        },
        etag: {
          required: false,
          serializedName: 'etag',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = ApplicationGatewayHttpListener;
